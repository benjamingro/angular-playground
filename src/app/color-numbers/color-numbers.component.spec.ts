import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNumbersComponent } from './color-numbers.component';

describe('ColorNumbersComponent', () => {
  let component: ColorNumbersComponent;
  let fixture: ComponentFixture<ColorNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
