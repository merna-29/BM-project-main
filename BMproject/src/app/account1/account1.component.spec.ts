import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Account1Component } from './account1.component';

describe('Account1Component', () => {
  let component: Account1Component;
  let fixture: ComponentFixture<Account1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Account1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Account1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
