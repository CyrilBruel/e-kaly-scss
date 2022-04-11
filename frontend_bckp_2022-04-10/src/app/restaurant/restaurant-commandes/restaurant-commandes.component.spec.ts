import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCommandesComponent } from './restaurant-commandes.component';

describe('RestaurantCommandesComponent', () => {
  let component: RestaurantCommandesComponent;
  let fixture: ComponentFixture<RestaurantCommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantCommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
