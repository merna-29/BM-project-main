import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPageOneLoginComponent } from './top-page-one-login.component';

describe('TopPageOneLoginComponent', () => {
  let component: TopPageOneLoginComponent;
  let fixture: ComponentFixture<TopPageOneLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPageOneLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPageOneLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
