import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreurLivrerComponent } from './livreur-livrer.component';

describe('LivreurLivrerComponent', () => {
  let component: LivreurLivrerComponent;
  let fixture: ComponentFixture<LivreurLivrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreurLivrerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreurLivrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
