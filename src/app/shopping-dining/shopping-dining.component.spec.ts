import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingDiningComponent } from './shopping-dining.component';

describe('ShoppingDiningComponent', () => {
  let component: ShoppingDiningComponent;
  let fixture: ComponentFixture<ShoppingDiningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingDiningComponent]
    });
    fixture = TestBed.createComponent(ShoppingDiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
