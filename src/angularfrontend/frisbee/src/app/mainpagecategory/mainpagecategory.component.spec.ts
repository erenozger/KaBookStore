import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagecategoryComponent } from './mainpagecategory.component';

describe('MainpagecategoryComponent', () => {
  let component: MainpagecategoryComponent;
  let fixture: ComponentFixture<MainpagecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
