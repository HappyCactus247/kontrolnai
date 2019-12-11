import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCostilComponent } from './first-costil.component';

describe('FirstCostilComponent', () => {
  let component: FirstCostilComponent;
  let fixture: ComponentFixture<FirstCostilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCostilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCostilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
