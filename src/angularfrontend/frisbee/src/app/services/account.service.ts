import { Injectable } from '@angular/core';
import { User } from '../shoppingcart/user';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http:HttpClient,private router:Router,private dialog:MatDialog) { }
  logged_in_user: User = new User();;

  login(user: User) {
    this.http.get<User>("http://localhost:8080/users/login/" + user.email)
    .subscribe(data => {
      this.logged_in_user=data;
      if (user.password === this.logged_in_user.password && this.logged_in_user != null){
        localStorage.setItem('user', JSON.stringify(this.logged_in_user));
        Swal.fire({
          title: 'Successfully logged in',
          text: 'You have successfully logged in.',
          icon: 'success',
        })
        this.dialog.closeAll();
        window.location.reload();
        return true;
      
      }
      else{
        Swal.fire({
          title: 'Password is not correct',
          text: 'Given password is not correct for that account',
          icon: 'warning',
        })
        return false;
      }

    },
    error=>{
      Swal.fire({
        title: 'Something went wrong',
        text: 'There is no account with this email',
        icon: 'warning',
      })
    }
    );
  }

  isLoggedIn(): boolean{
    let user = localStorage.getItem('user');
    return !(user === null);
  }

  logout() {
    localStorage.removeItem('user');
    Swal.fire({
      title: 'Successfully logged out',
      text: 'You have successfully logged out.',
      icon: 'success',
    })
    this.router.navigate(['/mainpage']);
    window.location.reload();
  }


}
