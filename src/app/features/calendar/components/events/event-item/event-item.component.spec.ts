import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { EventItem } from '../../../types/calendar.interface';
import { EventItemComponent } from './event-item.component';

describe('EventItemComponent', () => {
  let component: EventItemComponent;
  let fixture: ComponentFixture<EventItemComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventItemComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventItemComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;

    component.event = { title: 'Example title' } as EventItem;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an H5 tag of `card-title`', () => {
    expect(de.query(By.css('h5')).nativeElement.innerText).toBe(
      'Example title'
    );
  });
});
