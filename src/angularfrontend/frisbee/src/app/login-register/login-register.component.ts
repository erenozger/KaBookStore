import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { User } from '../shoppingcart/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  SecureKey = "frisbee";
  encrypted: String;
  decrypted: String;
  RegisterForm;
  LoginForm;
  userLogin: User = new User();
  userRegister: User = new User();
  register_path = "http://localhost:8080/users/register";
  checked = false;
  
  constructor(private accountService: AccountService, public dialog: MatDialog, private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  createForms() {
    this.RegisterForm = this.formBuilder.group({
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: ["", [Validators.required, Validators.minLength(5)]],
      password_confirm: ["", [Validators.required, Validators.minLength(5)]],
      gender: ["male", Validators.required],
      gsm: ["", [Validators.required, Validators.pattern("^[0-9][0-9]+$"), Validators.minLength(10), Validators.maxLength(10)]],
      birth_date: ["", Validators.required],
      terms: this.checked,
    });

    this.LoginForm = this.formBuilder.group({
      email: ["",/*[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]*/],
      password: ["", /*Validators.required*/],
    });

  }

  submitRegister() {
    if (this.checked) {
      if (this.RegisterForm.get('password')._pendingValue === this.RegisterForm.get('password_confirm')._pendingValue) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorizaton': 'Token'
          })
        }

        this.userRegister = Object.assign({}, this.RegisterForm.value);
        this.userRegister.password = CryptoJS.MD5(this.userRegister.password).toString();

        return this.http.post<User>(this.register_path, this.userRegister)
          .subscribe(
            data=>{
              Swal.fire({
                title: 'Successfully Registered',
                text: 'Please login to use system.',
                icon: 'success',
              })
              this.dialog.closeAll();
              this.router.navigate(['/mainpage']);
              
            },
            error=>{
              Swal.fire({
                title: 'Email has taken',
                text: 'There are another user with same email.',
                icon: 'warning',
              })
            }
          );
      }
      else {
        Swal.fire({
          title: 'Password confirmation is failed',
          text: 'Please ensure that passwords are same.',
          icon: 'warning',
        })
      }
    }
    else {
      Swal.fire({
        title: 'Agreements and Terms',
        text: 'To be able to register accept agreements and terms.',
        icon: 'warning',
      })
    }
  }


  change() {
    if (this.checked) {
      this.checked = false;
    }
    else {
      this.checked = true;
    }
  }

  submitLogin() {
    this.userLogin = this.LoginForm.value;
    this.userLogin.password = CryptoJS.MD5(this.userLogin.password).toString();
    this.accountService.login(this.userLogin);
  }

  ngOnInit(): void {
    this.createForms();
  }

}