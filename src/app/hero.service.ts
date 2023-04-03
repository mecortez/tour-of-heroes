import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
  /**
   When you provide the service at the root level, Angular creates a single, shared instance of HeroService and injects into any class that asks for it. Registering the provider in the @ Injectable metadata also allows Angular to optimize an application by removing the service if it isn't used.
   **/
})
export class HeroService {
  constructor(private _messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this._messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
