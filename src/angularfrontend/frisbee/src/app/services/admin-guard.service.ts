import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from './account.service';
import { User } from '../shoppingcart/user';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  current_user = JSON.parse(localStorage.getItem('user'));

  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
    if(this.current_user != null){  
      if(this.current_user.type  === ""){
        Swal.fire({
          title: 'Authorization Problem',
          text: 'You are not allowed to enter this page!',
          icon: 'warning',
        })
        this.router.navigate(['/mainpage']);
        return false;
      }
      else if(this.current_user.type === "Admin"){
        return true;
      }
      else if(this.current_user.type === "Service"){
        Swal.fire({
          title: 'Authorization Problem',
          text: 'You are not allowed to enter this page!',
          icon: 'warning',
        })
        this.router.navigate(['/mainpage']);
        return false;
      }
      else if(this.current_user.type === "Customer"){
        Swal.fire({
          title: 'Authorization Problem',
          text: 'You are not allowed to enter this page!',
          icon: 'warning',
        })
        this.router.navigate(['/mainpage']);
        return false;
      }
      else{
        Swal.fire({
          title: 'Authorization Problem',
          text: 'You are not allowed to enter this page!',
          icon: 'warning',
        })
        this.router.navigate(['/mainpage']);
        return false;
      }
    }
    else{
      Swal.fire({
        title: 'Authorization Problem',
        text: 'You are not allowed to enter this page!',
        icon: 'warning',
      })
      this.router.navigate(['/mainpage']);
      return false;
    }
  }
}
