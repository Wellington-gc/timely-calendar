import { Calendar } from '../types/calendar.interface';
import { CalendarService } from './calendar.service';
import { Event } from '../types/event.interface';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

describe('CalendarService', () => {
  let calendarService: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CalendarService]
    });

    calendarService = TestBed.inject(CalendarService);
  });

  it('should get all calendar events', () => {
    const expectedData: Calendar = {
      data: {
        from: 0,
        has_next: false,
        has_prior: false,
        items: [],
        size: 0,
        total: 1
      }
    };

    calendarService.getCalendar({ start_date_utc: 0 }).subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      }
    });
  });

  it('should get a single event', () => {
    const expectedData: Event = { data: { id: 1, title: '', description: '' } };

    calendarService.getEvent(1, '0').subscribe({
      next: (data) => {
        expect(data).toEqual(expectedData);
      }
    });
  });
});
