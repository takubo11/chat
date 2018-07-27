import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';
import { Feed } from '../Feed';
import { Hello } from '../hello';

// import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  // feed: Feed = {
  //   id: 1,
  //   username: 'john',
  //   message: 'first message',
  //   regist_date: '20180721210000'
  // };
  hello: Hello = {
    str: 'john smith'
  };

  constructor(private helloService: HelloService) { }

  ngOnInit() {
    // this.helloService.get().subscribe(data) => {
    //   this.feed = data;
    // }

    // this.helloService.getAll().subscribe(data) => {
    //   this.feed = data;
    // }

    // this.helloService.getAll().subscribe(data => {
    //   this.feed.message = data;
    // });

    // this.feed.message = this.helloService.hello();
  }

}
