import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInfoEditComponent } from './payment-info-edit.component';

describe('PaymentInfoEditComponent', () => {
  let component: PaymentInfoEditComponent;
  let fixture: ComponentFixture<PaymentInfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentInfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
