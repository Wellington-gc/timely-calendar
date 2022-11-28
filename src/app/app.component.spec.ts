import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { TestBed } from '@angular/core/testing';

@Component({ selector: 'app-events', template: '' })
class EventsStubComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [AppComponent, EventsStubComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
