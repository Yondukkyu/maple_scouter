import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equip-table',
  templateUrl: './equip-table.component.html',
  styleUrls: ['./equip-table.component.scss']
})
export class EquipTableComponent implements OnInit {

  @Input() equip_table_list :string[] = [];
  @Input() equip_table :number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
