import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../bookadmin/book';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../shoppingcart/user';
import { Payment_Information } from '../shoppingcart/payment_information';
import { Order } from '../shoppingcart/order';
import Swal from 'sweetalert2';
import { Shopping_Cart_Book } from '../shoppingcart/shopping_cart_book';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  books:Book[];
  id:number;
  current_user:User = new User();
  cash:number = 0;
  valid:number = 0;
  cargo:number = 0;
  totalprice:number=0;
  user:User = new User();
  paymentinfo:Payment_Information= new Payment_Information();
  order:Order = new Order();
  constructor(public dialog:MatDialog,private http:HttpClient, private formBuilder:FormBuilder, private route:ActivatedRoute,private router:Router) { }
  discount:number=0;
  cartbooks2:Shopping_Cart_Book[];
  current_Date:any;
  subTotal:number;
  
  ngOnInit(): void {
    
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate()
    this.current_Date = formatted_date;
    this.current_user = JSON.parse(localStorage.getItem('user'));
    
    
    this.id = this.current_user.user_id;
    this.cash = this.route.snapshot.params['id'];
    this.valid = this.route.snapshot.params['valid'];
    this.cargo = this.route.snapshot.params['cargo'];
    console.log("VALID = "+this.valid);
    console.log("cash = "+this.cash);
    console.log("cargo = "+this.cargo);


    this.http.get<Shopping_Cart_Book[]>("http://localhost:8080/shoppingcart/cartbook/" + this.id).subscribe(data => {
      this.cartbooks2 = data;
      

      this.http.get<Book[]>("http://localhost:8080/shoppingcart/shoppingcartbook/"+this.id).subscribe(data=>{ 
      // User a ait shopping carttaki kitaplar cekilecek
      this.books = data;
      for(let book of this.books){
        //this.totalprice+=book.price;
        for(let book2 of this.cartbooks2){
          if(book.book_id==book2.book_ID){
            this.totalprice += book.price * book2.quantity;
          }
        }
      }
      this.totalprice = Number(this.totalprice.toFixed(2));
      console.log("TOTAL="+this.totalprice);
      this.subTotal = this.totalprice;
      if(this.valid==1){

       this.discount = this.totalprice/10;
       
       this.totalprice = this.totalprice - this.discount;
       
       this.totalprice = Number(this.totalprice.toFixed(2));

      }


      
    });
    } );

    

    this.http.get<User>("http://localhost:8080/users/userinfo/"+this.id).subscribe(data=>{ 
      console.log("HATA1");
  
    this.user = data;
      console.log("HATA2");
      //console.log(this.user.address);
    });

    if(this.cash == 1){
      this.http.get<Payment_Information>("http://localhost:8080/users/payinfo/"+this.id).subscribe(data=>{ 
        this.paymentinfo = data;
        console.log(this.paymentinfo.card_holder);
      });
  }

  }

  showInvoice(){
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorizaton':'Token'
        })
      
    }

      Swal.fire({
        title: 'Agreements and Terms',
        text: 'To be able to register accept agreements and terms.',
        icon: 'warning',
      })
    
  }

  confirmation(){
    // CREATE ORDER AND LEAVE PAGE
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    if(this.cash==0){
      this.order.payment_id = null;
    }
    else if(this.cash == 1){
      this.order.payment_id=this.paymentinfo.payment_id;
    }
    else{console.log("Cash Farkli gelmis");alert();}
    this.order.order_date= formatted_date;
    let cargois:String = "";
    if(this.cargo==1){cargois="X Cargo";}
      else if(this.cargo==2){cargois="Y Cargo";}
      else if(this.cargo==3){cargois="Z Cargo";}
      else{alert();return;}
    this.order.cargo_company=cargois;
    this.order.user_id = this.id;
    this.order.is_confirmed = 0;
    console.log(this.order);
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorizaton':'Token'
      })
    }

    this.http.post<Order>("http://localhost:8080/shoppingcart/createorder",this.order)
    .subscribe(data => console.log(this.order), error => console.log(error));
    for(let book of this.cartbooks2){
      for(let book2 of this.books){
          if(book.book_ID==book2.book_id){
            console.log(book2.title+" quantity="+book.quantity)
            this.http.post<Book>("http://localhost:8080/shoppingcart/stockchange/"+book.quantity,book2).subscribe(data => console.log(this.order), error => console.log(error));
          }
      }
    }
    
    this.http.post<Order>("http://localhost:8080/shoppingcart/allSC",this.order.user_id) 
    .subscribe(data => console.log(this.order), error => console.log(error));

    



    Swal.fire('SUCCESFUL','Your order is ready. Please wait for the confirmation by admin','success')
    setTimeout(() => {
      this.router.navigate(['/mainpage']);
    }, 1500);
    
    
    
    

  }

}
