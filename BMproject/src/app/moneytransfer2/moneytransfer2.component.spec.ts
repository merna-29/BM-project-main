import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moneytransfer2Component } from './moneytransfer2.component';

describe('Moneytransfer2Component', () => {
  let component: Moneytransfer2Component;
  let fixture: ComponentFixture<Moneytransfer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moneytransfer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moneytransfer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
