import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstpageloginComponent } from './firstpagelogin.component';

describe('FirstpageloginComponent', () => {
  let component: FirstpageloginComponent;
  let fixture: ComponentFixture<FirstpageloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstpageloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstpageloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
