import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeMoneyComponent } from './step-three-money.component';

describe('StepThreeMoneyComponent', () => {
  let component: StepThreeMoneyComponent;
  let fixture: ComponentFixture<StepThreeMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepThreeMoneyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepThreeMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
