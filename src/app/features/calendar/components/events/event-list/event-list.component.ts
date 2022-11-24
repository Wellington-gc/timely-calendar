import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../../services/calendar.service';
import { Event } from '../../../types/event.interface';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit {
  constructor(private readonly calendarService: CalendarService) {}

  loadedEvents: Event[] = [];

  ngOnInit(): void {
    this.calendarService.getCalendar().subscribe((calendar) => {
      this.loadedEvents = calendar.data.items;
    });
  }
}
