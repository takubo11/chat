import { Component, OnInit } from '@angular/core';
import { Feed } from '../feed';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HelloService]
})
export class HeroesComponent implements OnInit {
  feed: Feed = {
    id: 1,
    username: 'john',
    message: 'message hogehoge',
    regist_date: '293r2'
  };

  constructor(private helloService: HelloService) { }

  ngOnInit() {
    // this.feed.message = this.helloService.hello();
    // this.feed.message = 'hello';

    this.helloService.get().subscribe(message => { this.feed.message = message; });
  }

}
