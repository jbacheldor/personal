import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLabelComponent } from './brand-label.component';

describe('BrandLabelComponent', () => {
  let component: BrandLabelComponent;
  let fixture: ComponentFixture<BrandLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
