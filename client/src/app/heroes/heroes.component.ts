import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Feed } from '../feed';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstrom'
  };

  feed: Feed = {
    id: 1,
    username: 'john',
    message: 'message hogehoge',
    regist_date: '293r2'
  };

  constructor() { }

  ngOnInit() {

  }

}

// export class Feed {
//   id: number;
//   username: string;
//   message: string;
//   regist_date: string;
// }
