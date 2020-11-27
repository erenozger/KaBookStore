import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbookformComponent } from './editbookform.component';

describe('EditbookformComponent', () => {
  let component: EditbookformComponent;
  let fixture: ComponentFixture<EditbookformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbookformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
