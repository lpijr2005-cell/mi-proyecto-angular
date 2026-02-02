import { Component } from '@angular/core';
import { IEvent } from '../i-event';
import { CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'events-show',
  imports: [TitleCasePipe, CurrencyPipe, DatePipe, FormsModule],
  templateUrl: './events-show.html',
  styleUrls: ['./events-show.css'],
})
export class EventsShow {
  events: IEvent[] = [
    {
      title: 'Cima del Buixcarró', //Puesto en minuscula para comprobar el uso de 'titlecase'
      image: 'buixcarro.jpg',
      date: '2026-03-15',
      description: 'Senda dura de senderismo al pico del Buixcarró',
      price: 25,
    },
    {
      title: 'playa de El Puig', //Puesto en minuscula para comprobar el uso de 'titlecase'
      image: 'elPuig.jpg',
      date: '2026-04-10',
      description: 'Escapada a la playa de El Puig de Santa María',
      price: 10,
    },
  ];

  search: string = '';

  orderDate() {
    this.search = '';
    this.events.sort((a, b) => a.date.localeCompare(b.date));
  }

  orderPrice() {
    this.search = '';
    this.events.sort((a, b) => a.price - b.price);
  }

  newEvent: IEvent = {
    title: '',
    description: '',
    image: '',
    price: 0,
    date: '',
  };

  addEvent() {
    this.events.push({ ...this.newEvent });

    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: '',
    };
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) return;

    const reader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);

    reader.onloadend = () => {
      this.newEvent.image = reader.result as string;
    };
  }
}
