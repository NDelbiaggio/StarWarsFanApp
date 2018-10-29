import { Component, OnInit, Input, SimpleChanges, SimpleChange, OnChanges, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination-bar',
  templateUrl: './pagination-bar.component.html',
  styleUrls: ['./pagination-bar.component.scss']
})
export class PaginationBarComponent implements OnInit, OnChanges {  
  @Input('size') nbPages: number = 0;
  @Input('currentPage') currentPage = 1;
  @Output('changed') pageHasChanged: EventEmitter<number>;

  pages: number[]; 

  constructor() { 
    this.pages = [];
    this.pageHasChanged = new EventEmitter<number>()
  }

  ngOnInit() {
    this.fillPages();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fillPages();
    this.currentPage = 1;
  }

  /**
   * Fill the aray with the sequence of page number
   */
  fillPages(){
    if(this.nbPages){
      this.pages = Array(this.nbPages).fill(1).map((x, i) => i);
    }
  }

  /**
   * Emit an event when a new page has been selected
   * @param page 
   */
  pageChanged(page){
    this.currentPage = page;
    this.pageHasChanged.emit(this.currentPage);
  }

}
