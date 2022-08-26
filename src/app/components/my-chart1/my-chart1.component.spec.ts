import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChart1Component } from './my-chart1.component';

describe('MyChart1Component', () => {
  let component: MyChart1Component;
  let fixture: ComponentFixture<MyChart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyChart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
