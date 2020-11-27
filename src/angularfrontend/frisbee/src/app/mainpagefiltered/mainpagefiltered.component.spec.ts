import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainpagefilteredComponent } from './mainpagefiltered.component';

describe('MainpagefilteredComponent', () => {
  let component: MainpagefilteredComponent;
  let fixture: ComponentFixture<MainpagefilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainpagefilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainpagefilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
