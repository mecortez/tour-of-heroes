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
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }}
