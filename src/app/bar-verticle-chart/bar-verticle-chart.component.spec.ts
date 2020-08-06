import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarVerticleComponent } from './bar-verticle-chart.component';

describe('BarVerticleComponent', () => {
  let component: BarVerticleComponent;
  let fixture: ComponentFixture<BarVerticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarVerticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarVerticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
