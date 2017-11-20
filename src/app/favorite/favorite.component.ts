// tslint:disable:one-line
// tslint:disable:no-trailing-whitespace
import { interpolate } from '@angular/core/src/view/util';

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input() isSelected: boolean;
  @Output() change = new EventEmitter();
 

  onClick()
    {   
    this.isSelected = !this.isSelected;

    this.change.emit({newValue: this.isSelected});
  }

}
export interface FavoriteChangedEventArgs {
  newValue: boolean ;
}
