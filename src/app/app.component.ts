import { Component, OnInit } from '@angular/core';

// Import the DataService
import { DataService } from './data.service';
import { HackerNewsService} from './app.service';
import { HeroService } from './hero.service';
import { Hero } from './hero';



export class HackerNewsComponent{
  news = {};
  constructor(private HackerNewsService:HackerNewsService){
    this.HackerNewsService.getNews().subscribe(data => this.news = data);
  }
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) { }
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesAsync().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
