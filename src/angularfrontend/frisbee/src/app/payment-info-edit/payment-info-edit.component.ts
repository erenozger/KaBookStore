import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Payment_Information } from '../shoppingcart/payment_information';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-info-edit',
  templateUrl: './payment-info-edit.component.html',
  styleUrls: ['./payment-info-edit.component.css']
})
export class PaymentInfoEditComponent implements OnInit {
  
  current_user;
  editForm;
  editted_payment_information;
  payment_method: Payment_Information;
  user_id: number;
  

  constructor(private http:HttpClient, private formBuilder: FormBuilder, private dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    this.current_user = JSON.parse(localStorage.getItem('user'));
    this.getPaymentMethodAndCreateForm();
  }

  createForms(){
    
    this.editForm = this.formBuilder.group({
      user_id: [this.current_user.user_id, [Validators.required]],
      payment_id: [this.payment_method.payment_id, [Validators.required]],
      payment_name: [this.payment_method.payment_name, [Validators.required]],
      card_holder: [this.payment_method.card_holder, [Validators.required]],
      CCN: [this.payment_method.ccn, [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      CVC: [this.payment_method.cvc, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      validation_date: [this.payment_method.validation_date, [Validators.required]]
    });
  }


  submitEditPayment(){
    console.log(this.editForm.value);
    this.editted_payment_information = this.editForm.value;
    this.editted_payment_information.cvc = this.editForm.get('CVC')._pendingValue;
    this.editted_payment_information.ccn = this.editForm.get('CCN')._pendingValue;
    
    console.log(this.editted_payment_information);
    
    this.http.post<Payment_Information>("http://localhost:8080/users/editpayinfo", this.editted_payment_information)
    .subscribe(
      data=>{
        Swal.fire({
          title: 'Payment Method is Updated',
          text: 'You updated your payment method successfully!',
          icon: 'success',
        })
        this.dialog.closeAll();
        window.location.reload();
      },
      error=>{
        Swal.fire({
          title: 'Something went Wrong',
          text: 'Payment method is not updated!',
          icon: 'warning',
        })
      },
    );
  }


  async getPaymentMethodAndCreateForm(){
    const data = await this.http.get<Payment_Information>("http://localhost:8080/users/payinfo/" + this.current_user.user_id).toPromise();
    this.payment_method = data;
    this.createForms();
  }
}
