import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorNumbersUiComponent } from './color-numbers-ui.component';

describe('ColorNumbersUiComponent', () => {
  let component: ColorNumbersUiComponent;
  let fixture: ComponentFixture<ColorNumbersUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorNumbersUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorNumbersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
