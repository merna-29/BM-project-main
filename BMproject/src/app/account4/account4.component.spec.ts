import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Account4Component } from './account4.component';

describe('Account4Component', () => {
  let component: Account4Component;
  let fixture: ComponentFixture<Account4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Account4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Account4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
