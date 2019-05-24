import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesOfUserComponent } from './movies-of-user.component';

describe('MoviesOfUserComponent', () => {
  let component: MoviesOfUserComponent;
  let fixture: ComponentFixture<MoviesOfUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesOfUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesOfUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
