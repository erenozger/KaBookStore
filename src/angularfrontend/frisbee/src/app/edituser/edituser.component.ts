import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../shoppingcart/user';
import { validateBasis } from '@angular/flex-layout';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  current_user: User;
  editPersonalForm;


  constructor(private router: Router, private http: HttpClient, public dialog: MatDialog, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.current_user = JSON.parse(localStorage.getItem('user'));
    this.createForms();
  }

  submitEditPersonal(){
    
    this.current_user.first_name = this.editPersonalForm.get('first_name')._pendingValue;
    this.current_user.last_name = this.editPersonalForm.get('last_name')._pendingValue;
    this.current_user.birth_date = this.editPersonalForm.get('birth_date')._pendingValue;
    this.current_user.gender= this.editPersonalForm.get('gender')._pendingValue;
    this.current_user.gsm = this.editPersonalForm.get('gsm')._pendingValue;
    this.current_user.address = this.editPersonalForm.get('address')._pendingValue;
    

    this.http.post<User>("http://localhost:8080/users/updateuser",this.current_user)
    .subscribe(
      data=>{
        Swal.fire({
          title: 'Successfully Editted',
          text: 'Your informations are updated.',
          icon: 'success',
        })
        localStorage.setItem('user',JSON.stringify(this.current_user));
        this.dialog.closeAll();
        window.location.reload();
      },
      error=>{
        Swal.fire({
          title: 'Something went wrong',
          text: 'We encounter an issue while updating your informations',
          icon: 'success',
        })
      }
    );   

  }


  createForms(){
    this.editPersonalForm = this.formBuilder.group({
      first_name: [this.current_user.first_name, Validators.required],
      last_name: [this.current_user.last_name, Validators.required],
      birth_date: [this.current_user.birth_date, Validators.required],
      gender: [this.current_user.gender, Validators.required],
      gsm: [this.current_user.gsm,[Validators.required, Validators.pattern("^[0-9][0-9]+$"), Validators.minLength(10), Validators.maxLength(10)]],
      address: [this.current_user.address, Validators.maxLength(255)],
    });
  }

}
