import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Moneytransfer3Component } from './moneytransfer3.component';

describe('Moneytransfer3Component', () => {
  let component: Moneytransfer3Component;
  let fixture: ComponentFixture<Moneytransfer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Moneytransfer3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Moneytransfer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
