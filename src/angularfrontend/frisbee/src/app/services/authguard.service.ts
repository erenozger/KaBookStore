import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {
  constructor(private router: Router, private accountService: AccountService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      let logged = this.accountService.isLoggedIn();

      if (logged) {
        return true;
      }
      else{
        this.router.navigate(['/mainpage']);
        return false;
      }
    }
}
