import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookingpage } from './bookingpage';

describe('Bookingpage', () => {
  let component: Bookingpage;
  let fixture: ComponentFixture<Bookingpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookingpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bookingpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
