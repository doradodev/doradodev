import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  start = false
  start2 = false;
  stringInterpolation: string;
  constructor() { }

  ngOnInit() {
    setTimeout(() => this.start = true, 500);

    const options = {
      strings: [
        'soy Senior Fullstack Engineer',
        'he desarrollado proyectos en Java ',
        'he desarrollado proyectos en python',
        'he desarrollado proyectos en javascript',
        'he desarrollado proyectos con Angular',
        'he desarrollado proyectos con node',
        'estoy viajando por el mundo',
        'y mi pasion es programar :)',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 4200,
      showCursor: true,
      cursorChar: '',
      loop: true,
      loopCount: 2,
    }
    const typed = new Typed('.typing-element', options);

  }

  onTypingAnimationComplete () {

    //this.start2 = true;

  }
  onComplete() {

    //setTimeout(() => this.stringInterpolation = "hola", 6000);
  }

}
