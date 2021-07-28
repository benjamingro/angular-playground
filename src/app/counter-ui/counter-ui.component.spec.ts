import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterUiComponent } from './counter-ui.component';

describe('CounterUiComponent', () => {
  let component: CounterUiComponent;
  let fixture: ComponentFixture<CounterUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
