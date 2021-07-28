import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPlaygroundComponent } from './my-playground.component';

describe('MyPlaygroundComponent', () => {
  let component: MyPlaygroundComponent;
  let fixture: ComponentFixture<MyPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
