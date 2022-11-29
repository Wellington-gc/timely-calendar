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
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnDestroy {
  ngbDate: NgbDateStruct;
  loadedEvents: EventItem[] = [];
  page = 1;

  private readonly searchSubject = new Subject<string | undefined>();
  private searchSubscription?: Subscription;

  constructor(
    private readonly calendarService: CalendarService,
    private readonly ngbCalendar: NgbCalendar
  ) {}

  ngOnInit() {
    this.ngbDate = this.ngbCalendar.getToday();

    this.calendarService
      .getCalendar({ start_date_utc: this.getUnixDate(), page: this.page })
      .subscribe((calendar) => {
        this.loadedEvents = calendar.data.items;
      });

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

  onDateSelection(event: NgbDateStruct) {
    this.ngbDate = event;

    this.calendarService
      .getCalendar({ start_date_utc: this.getUnixDate() })
      .subscribe((calendar) => {
        this.loadedEvents = calendar.data.items;
      });
  }

  onSearchQueryInput(event: Event) {
    const searchQuery = (event.target as HTMLInputElement).value;
    this.searchSubject.next(searchQuery?.trim());
  }

  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }

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

  selectToday() {
    this.ngbDate = this.ngbCalendar.getToday();
    this.onDateSelection(this.ngbDate);
  }

  onScroll() {
    this.calendarService
      .getCalendar({ start_date_utc: this.getUnixDate(), page: ++this.page })
      .subscribe((calendar) => {
        this.loadedEvents.push(...calendar.data.items);
      });
  }
}
