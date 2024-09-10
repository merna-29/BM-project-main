import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallloginComponent } from './smalllogin.component';

describe('SmallloginComponent', () => {
  let component: SmallloginComponent;
  let fixture: ComponentFixture<SmallloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
