import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookadminComponent } from './bookadmin.component';

describe('BookadminComponent', () => {
  let component: BookadminComponent;
  let fixture: ComponentFixture<BookadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
