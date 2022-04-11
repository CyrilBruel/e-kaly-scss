import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListePlatsComponent } from './client-liste-plats.component';

describe('ClientListePlatsComponent', () => {
  let component: ClientListePlatsComponent;
  let fixture: ComponentFixture<ClientListePlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientListePlatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListePlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
