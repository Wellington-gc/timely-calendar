import { Component, Input } from '@angular/core';
import { Event } from 'src/app/features/calendar/types/event.interface';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent {
  @Input() event: Event;
}
