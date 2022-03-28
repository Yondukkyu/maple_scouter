import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.scss']
})
export class LinkTableComponent implements OnInit {
  
  @Input() link_table :number[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
