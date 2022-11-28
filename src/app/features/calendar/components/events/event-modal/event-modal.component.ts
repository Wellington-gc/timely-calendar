import { Component, Input, OnInit } from '@angular/core';
import { Event, EventData } from '../../../types/event.interface';
import { CalendarService } from '../../../services/calendar.service';
import { EventItem } from '../../../types/calendar.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  @Input() event: EventItem;

  loadedEvent: EventData;

  constructor(
    private readonly calendarService: CalendarService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit(): void {
    this.getCalendarEvent();
  }

  getCalendarEvent() {
    this.calendarService
      .getEvent(this.event.id, this.event.instance)
      .subscribe((event: Event) => {
        this.loadedEvent = event.data;
      });
  }
}
