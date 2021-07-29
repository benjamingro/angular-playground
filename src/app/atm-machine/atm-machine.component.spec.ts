import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmMachineComponent } from './atm-machine.component';

describe('AtmMachineComponent', () => {
  let component: AtmMachineComponent;
  let fixture: ComponentFixture<AtmMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtmMachineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
