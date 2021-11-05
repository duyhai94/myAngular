import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCapchaComponent } from './forms-capcha.component';

describe('FormsCapchaComponent', () => {
  let component: FormsCapchaComponent;
  let fixture: ComponentFixture<FormsCapchaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsCapchaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCapchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
