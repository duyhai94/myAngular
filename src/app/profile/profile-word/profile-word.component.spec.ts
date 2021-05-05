import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileWordComponent } from './profile-word.component';

describe('ProfileWordComponent', () => {
  let component: ProfileWordComponent;
  let fixture: ComponentFixture<ProfileWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileWordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
