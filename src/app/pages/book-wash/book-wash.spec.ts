import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookWash } from './book-wash';

describe('BookWash', () => {
  let component: BookWash;
  let fixture: ComponentFixture<BookWash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookWash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookWash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
