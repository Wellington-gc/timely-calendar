import { CommonModule } from '@angular/common';
import { EventItemComponent } from './components/events/event-list/event-item/event-item.component';
import { EventListComponent } from './components/events/event-list/event-list.component';
import { EventsComponent } from './components/events/events.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [EventsComponent, EventListComponent, EventItemComponent],
  exports: [EventsComponent],
  imports: [CommonModule]
})
export class CalendarModule {}
