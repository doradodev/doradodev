import { Component, OnInit } from '@angular/core';
import { Typed } from 'typed.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  start = false
  start2 = false;
  stringInterpolation:string;
  typed;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.start = true, 1000);
    this.stringInterpolation = "soy senior fullstack Engineer";

    this.typed = new Typed(".element", {
      strings: ["This is a JavaScript library", "This is an ES6 module"],
      smartBackspace: true // Default value
    });
  }

  onTypingAnimationComplete () {

    this.start2 = true;

  }
  onComplete() {

    setTimeout(() => this.stringInterpolation = "hola", 6000);
  }

}
