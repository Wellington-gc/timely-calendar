import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from './features/calendar/calendar.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CalendarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
