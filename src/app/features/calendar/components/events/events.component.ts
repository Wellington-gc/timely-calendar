import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs';
import { CalendarService } from '../../services/calendar.service';
import { EventItem } from '../../types/calendar.interface';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit, OnDestroy {
  // Store the date from the DatePicker component
  ngbDate: NgbDateStruct;

  // Store the Array of events
  loadedEvents: EventItem[] = [];

  // Store the current page
  page = 1;

  // Search properties
  private searchSubject = new Subject<string | undefined>();
  private searchSubscription?: Subscription;

  constructor(
    private readonly calendarService: CalendarService,
    private readonly ngbCalendar: NgbCalendar
  ) {}

  ngOnInit() {
    // Set the current day when creating the component
    this.ngbDate = this.ngbCalendar.getToday();

    // Get Events when creating the component
    this.calendarService
      .getCalendar({ start_date_utc: this.getUnixDate(), page: this.page })
      .subscribe((calendar) => {
        this.loadedEvents = calendar.data.items;
      });

    // Create the search filter
    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(750),
        distinctUntilChanged(),
        switchMap((searchQuery) => {
          return this.calendarService.getCalendar({
            start_date_utc: this.getUnixDate(),
            term: searchQuery ?? null
          });
        })
      )
      .subscribe((results) => (this.loadedEvents = results.data.items));
  }

  // Store the selected date and update the Calendar
  onDateSelection(event: NgbDateStruct) {
    this.ngbDate = event;

    this.calendarService
      .getCalendar({ start_date_utc: this.getUnixDate() })
      .subscribe((calendar) => {
        this.loadedEvents = calendar.data.items;
      });
  }

  // Apply the Search filter
  onSearchQueryInput(event: Event) {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchSubject.next(searchQuery?.trim());
  }

  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }

  // Get the date on UNIX format
  getUnixDate() {
    const date = new Date(
      this.ngbDate.year,
      this.ngbDate.month,
      this.ngbDate.day,
      0,
      0,
      0
    );

    return Math.floor(date.getTime() / 1000);
  }

  // Select the current day
  selectToday() {
    this.ngbDate = this.ngbCalendar.getToday();
    this.onDateSelection(this.ngbDate);
  }

  // Append the Events Array on scroll
  onScroll() {
    this.calendarService
      .getCalendar({ start_date_utc: this.getUnixDate(), page: ++this.page })
      .subscribe((calendar) => {
        this.loadedEvents.push(...calendar.data.items);
      });
  }
}
