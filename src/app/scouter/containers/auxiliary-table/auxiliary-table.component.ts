import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-auxiliary-table',
  templateUrl: './auxiliary-table.component.html',
  styleUrls: ['./auxiliary-table.component.scss']
})
export class AuxiliaryTableComponent implements OnInit {

  @Input() auxiliary_table_list :number[] = [];
  @Input() auxiliary_table :number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
