import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorrComponent } from './errorr.component';

describe('ErrorrComponent', () => {
  let component: ErrorrComponent;
  let fixture: ComponentFixture<ErrorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
