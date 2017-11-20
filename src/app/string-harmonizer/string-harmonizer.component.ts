// tslint:disable:no-trailing-whitespace
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-harmonizer',
  templateUrl: './string-harmonizer.component.html',
  styleUrls: ['./string-harmonizer.component.css']
})
export class StringHarmonizerComponent implements OnInit {
  Title: string;
  
  constructor() { }

  ngOnInit() {
  }

    onKeyUp() {
      
      this.Title.toUpperCase();
    }
}
