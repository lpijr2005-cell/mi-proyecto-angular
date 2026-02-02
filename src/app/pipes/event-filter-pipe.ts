import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../i-event';

@Pipe({
  name: 'eventFilter',
  standalone: true
})
export class EventFilterPipe implements PipeTransform {

  transform(events: IEvent[], search: string): IEvent[] {
    if (!search) return events;

    search = search.toLowerCase();
    
    return events.filter(e =>
      e.title.toLowerCase().includes(search) ||
      e.description.toLowerCase().includes(search)
    );
    
  }

  
}