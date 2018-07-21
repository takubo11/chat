import { Feed } from '../Feed'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  feed: Feed = {
    id: 1,
    username: "john",
    message: "first message",
    regist_date: "20180721210000"
  };

  title = 'greeting'

  constructor() { }

  ngOnInit() {
  }

}
