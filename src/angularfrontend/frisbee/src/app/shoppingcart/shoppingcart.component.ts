import { Component, OnInit } from '@angular/core';
import { Book } from '../bookadmin/book';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InvoiceComponent } from '../invoice/invoice.component';
import { Router } from '@angular/router';
import { Coupon } from './coupon';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Shopping_Cart_Book } from './shopping_cart_book';
import { Cart_Book } from './cart_book';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';
import { Payment_Information } from './payment_information';
import Swal from 'sweetalert2';
import { User } from './user';
import { CommonService } from '../services/common.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private CommonService:CommonService, private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { }
  books: Book[];
  totalprice: number = 0;
  //userid: number = 2; //DENEME USERID =  2 
  userid:number;
  current_user: User = new User();
  coupons: Coupon[];
  couponnumber: number;
  cargonumber: String;
  paymentmethod:String;
  paymentform: NgForm;
  payment:Payment_Information;
  valid:number;
  cash:number = -1;
  cartbooks:Shopping_Cart_Book[];
  quantities:number[]=[];
  hata:number=0;
  ngOnInit(): void {

    this.current_user=JSON.parse(localStorage.getItem('user'))
    //console.log("BUBUBUBU  " + this.current_user.first_name);
    this.userid = this.current_user.user_id;

    this.http.get<Shopping_Cart_Book[]>("http://localhost:8080/shoppingcart/cartbook/" + this.userid).subscribe(data => {
      this.cartbooks = data;
      console.log("CARTBOOKLAR GELIYOR")
      this.http.get<Book[]>("http://localhost:8080/shoppingcart/shoppingcartbook/" + this.userid).subscribe(data => {
      // User a ait shopping carttaki kitaplar cekilecek
      this.books = data;
      console.log("BOOKLAR GELIYOR")
      //for (let book of this.books) {
      //  this.totalprice += book.price;
      //  for(let x of this.quantities){console.log("VAV2");}
      //  console.log("QUANTITY DOLU MU",this.quantities[book.book_id])
      //}
      for(let book1 of this.books){
        //console.log("BUBUBUB "+quantities2[book1.book_id]);
  //      console.log("BURADA1");
//        console.log(book1.book_id);

        for(let book2 of this.cartbooks){
          //console.log("BURADA2");
          //console.log(book2.book_ID);
          if(book2.book_ID==book1.book_id){
            //console.log("BURADA3");
            //console.log(book2+" ");
            //console.log(book1);
            this.totalprice += book1.price * book2.quantity;
            console.log("BEKLEMEYE GIRECEK");
          }
        }

      }
      this.totalprice = Number(this.totalprice.toFixed(2));

    });
    } );



    this.http.get<Coupon[]>("http://localhost:8080/shoppingcart/coupons").subscribe(data => {
      this.coupons = data;
      for (let kupon of this.coupons) {
        console.log(kupon.coupon_Number);
      }
    });

    this.http.get<Payment_Information>("http://localhost:8080/users/payinfo/"+this.userid).subscribe(data=>{ 
      this.payment = data;
      
      //console.log("payment = "+this.payment.card_holder)
      console.log("CARD HOLDER = "+this.payment.card_holder);
     
      
    });


  }

 

  async deleteBookfromCart(book: Book) {
    //KITABI SHOPPINGCARTTAN SIL
    console.log("DELETE BASILDI");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorizaton': 'Token'
      })
    }
    this.http.post<Book>("http://localhost:8080/shoppingcart/deleteshoppingcartbook/" + this.userid, book.book_id)
      .subscribe(data => console.log(data));

      Swal.fire('Succesful','Book is removed from the shopping cart','success');

      await this.delay(1000);
      
      window.location.reload();

      //this.router.navigate(['shoppingcart']);
  }

  async Payment() {
    this.hata = 0;
    //Cart Dolu Mu ?
    if(this.books.length<=0){
      //cart bos
      this.hata = 1;
      Swal.fire('Empty Cart','Your cart is empty.','warning');
      
      return;
    }


    // STOKLAR YETERLI MI?
    /*let stockarray:number[] =[];
    for(let book of this.books){
      if(book.stock-1<=0){
        //STOCK BITMIS
        alert(" Not available stock for "+ book.title);
        return;
      }
      else if(book.stock-stockarray[book.book_id]<0){
        alert(" Not available stock for "+ book.title);
        return;
      }
      else{
        stockarray[book.book_id] +=1;
      }
    }*/

    for(let book of this.cartbooks){
      for(let stockbook of this.books){
        if(book.book_ID==stockbook.book_id && stockbook.stock-book.quantity<=0){
          this.hata=1;
          Swal.fire('Not Available Stock', 'There is not available stock for ' + stockbook.title + '\n Please contact to the Support Service', 'warning');

          return;
        
        }
      }
      
    }
    if(this.paymentmethod==null){
      this.hata = 1;
      Swal.fire('No Payment Method','Please give select a payment method','error')
      return;
    }
    if(this.paymentmethod=="CreditCard"){
      console.log("PAYMENT METHOD CREDITCARD")
      
      if(this.payment==null){
        console.log("PAYMENT INFOSU NULL")
        this.hata=1;
        Swal.fire('No Credit card','Please Give a Credit Card','error')
        //window.location.reload();
        return;
      }
      console.log("CARD HOLDER KONTROL = "+this.payment.card_holder);
      this.cash = 1; // 1 ise CreditCard
    //await this.delay(300);
    }
    
    else if(this.paymentmethod=="Cash"){
      console.log("PAYMENT METHOD CASH")
      this.cash = 0; // 0 ise cash oder
    }

    else{ this.cash = 2; // 2 ise Farkli method

    }



//USERIN ADRESI VAR MI ??????????????????????????

    console.log("User ="+this.current_user);
    console.log("ADRESSSS ="+this.current_user.address);
    if(this.current_user.address==null || this.current_user.address==""){
      //adresi yok
      this.hata=1;
      Swal.fire('No Address','Please give an address','error');
      return;
    }



    //FATURA GOZUKMELI ve ODEME YAPILMALI


    
    this.valid = this.validCoupon();
    console.log(this.valid);
    if(this.valid==0){
            //ALERT VERMELI KUPON KODU YANLIS
            this.hata=1;
            Swal.fire('Invalid Coupon','Please give a valid coupon','error');
            
            this.router.navigate(['shoppingcart']);
    }
    else{var id = this.userid;
      let cargo:number=0;
      if(this.cargonumber=="X Cargo"){cargo=1;}
      else if(this.cargonumber=="Y Cargo"){cargo=2;}
      else if(this.cargonumber=="Z Cargo"){cargo=3;}
      else{
        //Alert
        this.hata=1;
        Swal.fire('No Cargo Selected','Please select a cargo','error');
        return;
      }

      console.log('GIDIYOR ' + this.cash); //-1
      console.log("SONHATA = "+this.hata);
      if(this.hata==0){
        this.router.navigate(['invoice',this.cash,this.valid,cargo]);
      }
      
      /*if(this.hata==0){
        console.log("HATA = "+this.hata)
        this.CommonService.openInvoice(this.cash,this.valid,cargo);
      }*/

    }
   
  }

  validCoupon() {
    if(this.couponnumber==null){
      console.log("NULL");
      return 2;
    }
    for (let kupon of this.coupons) {
      console.log("DATABASEDEKI = ", kupon.coupon_Number, " GIRILEN = ", this.couponnumber)
      if (this.couponnumber == +kupon.coupon_Number) {
        console.log("ESLESTI"); return 1;
      }
    }
    return 0;
  }

  //openDialog() {
   // this.InvoiceserviceService.openDialog()
  //}

  getValue(id:number){
    for(let book of this.cartbooks){
      //console.log(book+"= ? = "+id);
      if(id == book.book_ID){
        return book.quantity;
      }

    }
    //return this.quantities[id];
  }

  delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
}
