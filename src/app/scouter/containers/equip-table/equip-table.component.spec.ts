import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipTableComponent } from './equip-table.component';

describe('EquipTableComponent', () => {
  let component: EquipTableComponent;
  let fixture: ComponentFixture<EquipTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
