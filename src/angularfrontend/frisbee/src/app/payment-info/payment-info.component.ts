import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Payment_Information} from '../shoppingcart/payment_information';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  AddPaymentForm;
  current_user;
  payment_information: Payment_Information;
  constructor(private router:Router, public dialog:MatDialog, private formBuilder:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
    this.current_user = JSON.parse(localStorage.getItem('user'));
    this.createForms();

  }

  createForms(){
    this.AddPaymentForm = this.formBuilder.group({
      user_id: this.current_user.user_id,
      payment_name: ["", Validators.required],
      card_holder: ["", Validators.required],
      CCN: ["", [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      CVC: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      validation_date: ["", Validators.required],
    });
  }

  submitAddPayment(){
    this.payment_information = this.AddPaymentForm.value;
    this.payment_information.ccn = this.AddPaymentForm.get('CCN')._pendingValue;
    this.payment_information.cvc = this.AddPaymentForm.get('CVC')._pendingValue;

    this.http.post<Payment_Information>("http://localhost:8080/users/addpayinfo", this.payment_information).subscribe(
      data=>{
        Swal.fire({
          title: 'Payment Method is Created',
          text: 'You created new payment method successfully',
          icon: 'success',
        })
        
        this.dialog.closeAll();
        window.location.reload();

      },
      error=>{
        Swal.fire({
          title: 'CCN is not valid',
          text: 'This CCN is used by another user.',
          icon: 'warning',
        })
      }
    )

  }

}
