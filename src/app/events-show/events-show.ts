import { Component } from '@angular/core';
import { IEvent } from '../i-event';

@Component({
  selector: 'events-show',
  templateUrl: './events-show.html',
  styleUrls: ['./events-show.css']
})
export class EventsShow {

  events: IEvent[] = [
    {
      title: 'Cima del Buixcarró',
      image: 'buixcarro.jpg',
      date: '2026-03-15',
      description: 'Senda dura de senderismo al pico de una de las montañas pertenecientes a la pedania de Pla de Corrals',
      price: 25
    },
    {
      title: 'Playa de El Puig',
      image: '/elPuig.jpg',
      date: '2026-04-10',
      description: 'Escapada a la playa de El Puig de Santa María',
      price: 10
    }
  ];

}
