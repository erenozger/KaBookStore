import { Component, OnInit } from '@angular/core';
import { User } from '../shoppingcart/user';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';
import { Payment_Information } from '../shoppingcart/payment_information';
import Swal from 'sweetalert2';
import { windowWhen } from 'rxjs/operators';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  current_user: User;
  user_id: number;
  gsm_formatted: string;
  payment_method;

  constructor(private http: HttpClient, private commonService: CommonService) {}


  ngOnInit(): void {
    this.current_user = JSON.parse(localStorage.getItem('user'));
    this.gsm_formatted = this.formatGSM(this.current_user.gsm);
    this.getPaymentMethod();
  }

  formatGSM(gsm_number){
    var gsm_formatted = "0" + gsm_number.substring(0,3) + " " + gsm_number.substring(3,6) + " " + gsm_number.substring(6,10);;
    return gsm_formatted;
  }

  formatCCN(CCN){
    var CCN_formatted = CCN.substring(0,4) + " " + CCN.substring(4,8) + " " + CCN.substring(8,12) + " " + CCN.substring(12,16); 
    return CCN_formatted;
  }

  editPersonal(){
    this.commonService.openEditPersonalDialog();    
  }

  addPaymentMethod(){
    this.commonService.openAddPaymentMethod();
  }

  editPaymentMethod(){
    this.commonService.openEditPaymentMethod();
  }  

  deletePaymentMethod(){
    this.http.post<Payment_Information>("http://localhost:8080/users/deletepayinfo", this.payment_method)
    .subscribe(
      data=>{
        Swal.fire({
          title: 'Deleted',
          text: 'Your payment method is deleted',
          icon: 'success',
        })
      },
      error=>{
        Swal.fire({
          title: 'Something went wrong',
          text: 'Deletion process encounters an issue.',
          icon: 'warning',
        })
      }
    )
    window.location.reload();
  }


  getPaymentMethod(){
    this.http.get<Payment_Information>("http://localhost:8080/users/payinfo/" + this.current_user.user_id).subscribe(
      data=>{
        this.payment_method = data;
      }
    );
  }


}
