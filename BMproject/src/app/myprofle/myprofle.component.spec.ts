import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofleComponent } from './myprofle.component';

describe('MyprofleComponent', () => {
  let component: MyprofleComponent;
  let fixture: ComponentFixture<MyprofleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprofleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
