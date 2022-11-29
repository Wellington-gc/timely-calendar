import { Calendar } from '../types/calendar.interface';
import { Event } from '../types/event.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface GetCalendarDto {
  start_date_utc: number;
  term?: string;
  page?: number;
}

@Injectable()
export class CalendarService {
  constructor(private readonly http: HttpClient) {}

  // Get the Calendar data from API
  getCalendar(query: GetCalendarDto): Observable<Calendar> {
    return this.http.get<Calendar>(
      `${environment.baseApiUrl}/api/calendars/54705442/events`,
      {
        headers: { 'x-api-key': environment.apiKey },
        params: { ...query, per_page: 30 }
      }
    );
  }

  // Get a single event by the ID
  getEvent(id: number, instance: string): Observable<Event> {
    return this.http.get<Event>(
      `${environment.baseApiUrl}/api/calendars/54705442/events/${id}/${instance}`,
      {
        headers: { 'x-api-key': environment.apiKey }
      }
    );
  }
}
