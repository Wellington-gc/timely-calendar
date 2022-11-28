import { Calendar } from '../types/calendar.interface';
import { Event } from '../types/event.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

export interface GetCalendarDto {
  start_date_utc: number;
  term?: string;
}

@Injectable()
export class CalendarService {
  constructor(private readonly http: HttpClient) {}

  getCalendar(query: GetCalendarDto) {
    return this.http.get<Calendar>(
      `${environment.baseApiUrl}/api/calendars/54705442/events`,
      {
        headers: { 'x-api-key': environment.apiKey },
        params: { ...query }
      }
    );
  }

  getEvent(id: number, instance: string) {
    return this.http.get<Event>(
      `${environment.baseApiUrl}/api/calendars/54705442/events/${id}/${instance}`,
      {
        headers: { 'x-api-key': environment.apiKey }
      }
    );
  }
}
