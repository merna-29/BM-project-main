import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileeComponent } from './myprofilee.component';

describe('MyprofileeComponent', () => {
  let component: MyprofileeComponent;
  let fixture: ComponentFixture<MyprofileeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyprofileeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyprofileeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
