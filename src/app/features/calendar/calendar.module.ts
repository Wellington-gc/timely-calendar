import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarService } from './services/calendar.service';
import { CommonModule } from '@angular/common';
import { EventItemComponent } from './components/events/event-item/event-item.component';
import { EventModalComponent } from './components/events/event-modal/event-modal.component';
import { EventsComponent } from './components/events/events.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [EventsComponent, EventItemComponent, EventModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    SharedModule,
    HttpClientModule,
    NgxMasonryModule,
    BrowserAnimationsModule,
    InfiniteScrollModule
  ],
  providers: [CalendarService],
  exports: [EventsComponent]
})
export class CalendarModule {}
