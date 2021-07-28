import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextMirrorComponent } from './text-mirror.component';

describe('TextMirrorComponent', () => {
  let component: TextMirrorComponent;
  let fixture: ComponentFixture<TextMirrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextMirrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextMirrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
