import { Component } from '@angular/core';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html'
})
export class EventItemComponent {
  title = '2021 Adult Beginner Golf Class 1- Co-Ed Classes Spring/Fall';
  start_datetime = '2021-09-17 09:00:00';
  end_datetime = '2023-10-24 10:30:00';
  img_src =
    'https://timelyapp-static.time.ly/images/54705442/https%253A%252F%252Fcdn.evbuc.com%252Fimages%252F120799413%252F238852745793%252F1%252Foriginal_small.jpg%3Fw%3D800%26auto%3Dformat%252Ccompress%26q%3D75%26sharp%3D10%26rect%3D0%252C88%252C720%252C360%26s%3D49729dfc922fabd1e287a5faf28aaadb';

  description =
    'Adult Beginner Golf Class 1 Spring/ FallSaturdays 12:00 PM-1:30 PMClasses are 1.5 hours for 4 weeks2021 Class Schedule:Feb 20th-March 13thApril 3rd-April 24thOctober 23rd- November13thThis class is av&hellip;';
}
