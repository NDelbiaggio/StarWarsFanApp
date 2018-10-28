import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent {

  @Input('title') title: string = "title";
  @Input('display') display: string = 'card';
  @Output('displayChanged') displayChanged: EventEmitter<string>;

  constructor(){
    this.displayChanged = new EventEmitter<string>();
  }

  toggleDisplay(){
    this.display = this.display == 'card'? 'table': 'card';
    this.displayChanged.emit(this.display);
  }

}
