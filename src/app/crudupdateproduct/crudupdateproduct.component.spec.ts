import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudupdateproductComponent } from './crudupdateproduct.component';

describe('CrudupdateproductComponent', () => {
  let component: CrudupdateproductComponent;
  let fixture: ComponentFixture<CrudupdateproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudupdateproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudupdateproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
