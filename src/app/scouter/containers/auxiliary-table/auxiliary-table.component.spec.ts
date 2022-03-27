import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxiliaryTableComponent } from './auxiliary-table.component';

describe('AuxiliaryTableComponent', () => {
  let component: AuxiliaryTableComponent;
  let fixture: ComponentFixture<AuxiliaryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxiliaryTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuxiliaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
