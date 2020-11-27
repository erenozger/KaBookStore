import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { EdituserComponent } from '../edituser/edituser.component';
import { PaymentInfoComponent } from '../payment-info/payment-info.component';
import { PaymentInfoEditComponent } from '../payment-info-edit/payment-info-edit.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public dialog: MatDialog) { }

  openLoginRegisterDialog(): void {
    const dialogRef = this.dialog.open(LoginRegisterComponent, {
      width: 'auto',
    });
  }

  openEditPersonalDialog():void{
    const dialogRef = this.dialog.open(EdituserComponent, {
      width: 'auto',
    });
  }

  openAddPaymentMethod():void{
    const dialogRef = this.dialog.open(PaymentInfoComponent, {
      width: 'auto',
    });
  }

  openEditPaymentMethod():void{
    const dialogRef = this.dialog.open(PaymentInfoEditComponent, {
      width: 'auto',
    });
    
  }

}
