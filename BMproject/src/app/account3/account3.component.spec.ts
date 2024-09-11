import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Account3Component } from './account3.component';

describe('Account3Component', () => {
  let component: Account3Component;
  let fixture: ComponentFixture<Account3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Account3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Account3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
