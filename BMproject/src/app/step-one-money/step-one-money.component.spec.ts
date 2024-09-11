import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneMoneyComponent } from './step-one-money.component';

describe('StepOneMoneyComponent', () => {
  let component: StepOneMoneyComponent;
  let fixture: ComponentFixture<StepOneMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepOneMoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepOneMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
