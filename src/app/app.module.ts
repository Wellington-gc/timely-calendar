import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CalendarModule } from './features/calendar/calendar.module';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CalendarModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
