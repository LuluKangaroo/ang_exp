import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftdevComponent } from './softdev.component';

describe('SoftdevComponent', () => {
  let component: SoftdevComponent;
  let fixture: ComponentFixture<SoftdevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftdevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftdevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
