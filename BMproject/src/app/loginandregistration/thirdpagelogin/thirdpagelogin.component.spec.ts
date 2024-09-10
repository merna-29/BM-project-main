import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdpageloginComponent } from './thirdpagelogin.component';

describe('ThirdpageloginComponent', () => {
  let component: ThirdpageloginComponent;
  let fixture: ComponentFixture<ThirdpageloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdpageloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdpageloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
