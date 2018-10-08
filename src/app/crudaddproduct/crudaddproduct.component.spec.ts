import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudaddproductComponent } from './crudaddproduct.component';

describe('CrudaddproductComponent', () => {
  let component: CrudaddproductComponent;
  let fixture: ComponentFixture<CrudaddproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudaddproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudaddproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
