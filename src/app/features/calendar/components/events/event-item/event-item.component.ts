import { Component, Input } from '@angular/core';
import { EventItem } from '../../../types/calendar.interface';
import { EventModalComponent } from '../event-modal/event-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent {
  @Input() event: EventItem;

  constructor(private readonly modalService: NgbModal) {}

  openModal(event: EventItem) {
    const modalRef = this.modalService.open(EventModalComponent, {
      ariaLabelledBy: 'modal-basic-title',
      size: 'lg'
    });

    modalRef.componentInstance.event = event;
  }
}
