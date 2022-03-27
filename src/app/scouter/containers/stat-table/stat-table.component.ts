import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-stat-table',
  templateUrl: './stat-table.component.html',
  styleUrls: ['./stat-table.component.scss']
})
export class StatTableComponent implements OnInit {

  @Input() stat_table_list :string[] = [];
  @Input() stat_table :number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}


