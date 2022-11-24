import { Calendar } from '../types/calendar.interface';
import { Event } from '../types/event.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class CalendarService {
  constructor(private readonly http: HttpClient) {}

  loadedEvents: Event[] = [];

  getCalendar() {
    return this.http.get<Calendar>(
      `${environment.baseApiUrl}/api/calendars/54705442/events`,
      {
        headers: { 'x-api-key': environment.apiKey }
      }
    );
  }
}
