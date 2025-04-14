import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWishComponent } from './new-wish.component';

describe('NewWishComponent', () => {
  let component: NewWishComponent;
  let fixture: ComponentFixture<NewWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewWishComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
