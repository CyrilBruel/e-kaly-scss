import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPlatsComponent } from './restaurant-plats.component';

describe('RestaurantPlatsComponent', () => {
  let component: RestaurantPlatsComponent;
  let fixture: ComponentFixture<RestaurantPlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantPlatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
