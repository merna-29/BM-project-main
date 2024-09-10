import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondpageloginComponent } from './secondpagelogin.component';

describe('SecondpageloginComponent', () => {
  let component: SecondpageloginComponent;
  let fixture: ComponentFixture<SecondpageloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondpageloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondpageloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
