import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsPlatComponent } from './client-details-plat.component';

describe('ClientDetailsPlatComponent', () => {
  let component: ClientDetailsPlatComponent;
  let fixture: ComponentFixture<ClientDetailsPlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientDetailsPlatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientDetailsPlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
