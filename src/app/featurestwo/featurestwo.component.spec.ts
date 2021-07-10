import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturestwoComponent } from './featurestwo.component';

describe('FeaturestwoComponent', () => {
  let component: FeaturestwoComponent;
  let fixture: ComponentFixture<FeaturestwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturestwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturestwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
