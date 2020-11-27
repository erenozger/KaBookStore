import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../services/common.service';
import { AccountService } from '../services/account.service';
import { User } from '../shoppingcart/user';
import { Shopping_Cart_Book } from '../shoppingcart/shopping_cart_book';
import { HttpClient, HttpHeaders } from '@angular/common/http';


//import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private http: HttpClient,private CommonService: CommonService, private accountService: AccountService) { }
  current_user: User;
  user_mail: string;
  user_login_check:number;
  user_type:string;
  taken_user_id:number;
  cartbooks:Shopping_Cart_Book[];
  shopping_Cart_Count:number;

  openLoginRegisterDialog() {
    this.CommonService.openLoginRegisterDialog();
  }

  ngOnInit(): void {
    this.current_user = JSON.parse(localStorage.getItem('user'));
    this.user_login_check;
    if(this.current_user){
      this.user_mail = this.current_user.email;
      this.user_login_check = 1;
      this.user_type = this.current_user.type;
      this.taken_user_id = this.current_user.user_id;
      this.http.get<Shopping_Cart_Book[]>("http://localhost:8080/shoppingcart/cartbook/" + this.taken_user_id).subscribe(data => {
        this.cartbooks = data;
        console.log(this.cartbooks.length);
        this.shopping_Cart_Count = this.cartbooks.length;
      });
    }else{
      this.user_mail = "not login";
      this.user_login_check = 0;
      this.user_type = "none";
      this.taken_user_id=0;
      this.shopping_Cart_Count = 0;
    }
    
  }
    
  

  isLoggedIn():boolean{
    return this.accountService.isLoggedIn();
  }

  logout(){
    this.accountService.logout();
  }


}
