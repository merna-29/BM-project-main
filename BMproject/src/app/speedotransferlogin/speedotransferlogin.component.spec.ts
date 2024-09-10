import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedotransferloginComponent } from './speedotransferlogin.component';

describe('SpeedotransferloginComponent', () => {
  let component: SpeedotransferloginComponent;
  let fixture: ComponentFixture<SpeedotransferloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeedotransferloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeedotransferloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
