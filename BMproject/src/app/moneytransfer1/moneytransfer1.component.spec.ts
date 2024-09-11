import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moneytransfer1Component } from './moneytransfer1.component';

describe('Moneytransfer1Component', () => {
  let component: Moneytransfer1Component;
  let fixture: ComponentFixture<Moneytransfer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moneytransfer1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moneytransfer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
