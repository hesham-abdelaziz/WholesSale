import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveDevicesComponent } from './responsive-devices.component';

describe('ResponsiveDevicesComponent', () => {
  let component: ResponsiveDevicesComponent;
  let fixture: ComponentFixture<ResponsiveDevicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveDevicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
