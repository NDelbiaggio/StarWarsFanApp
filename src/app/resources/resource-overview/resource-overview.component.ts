import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resource-overview',
  templateUrl: './resource-overview.component.html',
  styleUrls: ['./resource-overview.component.scss']
})
export class ResourceOverviewComponent implements OnInit {

  @Input('fields') fields;

  constructor() { }

  ngOnInit() {
  }

}
