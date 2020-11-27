import { Shopping_Cart } from './shopping_cart';
import { AccountService } from './../services/account.service';
import { User } from './../shoppingcart/user';
import { Book } from './../bookadmin/book';
import { ShoppingCartForm } from './shoppingCartForm';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../singlebook/comment';
import { Router } from '@angular/router';
import { timestamp, elementAt } from 'rxjs/operators';
import { getLocaleTimeFormat } from '@angular/common';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
  id: number;
  mybook: Book;
  myshoppingcart: Shopping_Cart;
  path = "http://localhost:8080/singlebook/newcomment";
  path1 = "http://localhost:8080/comment/addcomment";
  path2 = "http://localhost:8080/shoppingcart/addtoshoppingcart";
  path3 = "http://localhost:8080/comment/userReport";
  commentIDlist: Array<number> = [];
  cartBookIDlist: Array<number> = [];
  newcommentForm: FormGroup;
  reportForm: FormGroup;
  shoppingCartForm: FormGroup;
  rating: number;
  rating_count: number;
  book_id: number;
  addcomment: FormGroup;
  current_user: User;
  takenUserID: any;
  takenUserShoppingID: any;
  currentUserMail: any;
  reportObj:Object;



  constructor(private AccountService: AccountService, private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  books: Book[];
  comments: Comment[];
  comment: Comment = new Comment();
  shopping_cart: Shopping_Cart = new Shopping_Cart();
  sCartForm: ShoppingCartForm = new ShoppingCartForm();

  addcommentForm() {
    let current_datetime = new Date()
    let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds()
    this.newcommentForm = this.formBuilder.group({
      book_id: ["", Validators.required],
      user_id: [this.takenUserID],
      comment_date: [formatted_date],
      rating: ["", Validators.required],
      comment_text: ["", Validators.required]
    });
  }

  addShoppingCartForm() {
    this.shoppingCartForm = this.formBuilder.group({
      book_ID: ["", Validators.required],
      shopping_Cart_ID: ["", Validators.required],
      quantity: ["1", Validators.required],
    })

  }




  ngOnInit(): void {

    if (this.AccountService.isLoggedIn()) {
      this.current_user = JSON.parse(localStorage.getItem("user"));
      this.takenUserID = this.current_user.user_id;
      this.currentUserMail = this.current_user.email;
      this.http.get<Shopping_Cart>("http://localhost:8080/shoppingcart/shoppingCartID/" + this.takenUserID)
        .subscribe(data => {
          this.myshoppingcart = data;
          this.takenUserShoppingID = this.myshoppingcart.shopping_ID;
          console.log("user shopping id = " + this.takenUserShoppingID)
        }, error => console.log(error));


    } else {
      this.takenUserID = 0;
      this.currentUserMail = " You are not logged in please log in !"
      this.takenUserShoppingID = 0;
    }
    console.log("taken user id : " + this.takenUserID)
    this.myshoppingcart = new Shopping_Cart();
    console.log(this.myshoppingcart)
    console.log("MY SHOPPING CART : " + this.myshoppingcart)



    this.cartBookIDlist;
    this.commentIDlist;
    this.addcommentForm();
    this.addShoppingCartForm();
    this.mybook = new Book();
    console.log(this.mybook);
    console.log("123123");
    this.id = this.route.snapshot.params['id'];
    this.http.get<Book>("http://localhost:8080/books/editbooks/" + this.id)

      .subscribe(data => {
        console.log(data)
        this.mybook = data;
        this.book_id = this.id;
        this.rating = this.mybook.rating;
        this.rating_count = this.mybook.rating_count;
      }, error => console.log(error));



    this.http.get<Comment[]>("http://localhost:8080/comment/" + this.id)
      .subscribe(data => {
        console.log(data)
        this.comments = data;
        var i;
        for (i = 0; i < data.length; i++) {
          this.commentIDlist.push(data[i].user_id)
        }
        console.log(this.commentIDlist)

      });



  }
  addComment() {
    console.log("deneme eren1");
    if (this.newcommentForm.valid) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorizaton': 'Token'
        })
      }
      console.log("deneme eren1");
      console.log(this.newcommentForm.value);
      this.comment = Object.assign({}, this.newcommentForm.value);
      this.http.post<Comment>(this.path1, this.comment)
        .subscribe(data => console.log(this.comment), error => console.log(error));
        Swal.fire({
          title: 'Your comment and rating done.',
          text: 'You can delete it later.',
          icon: 'success',
        })
        setTimeout(() => {
          this.router.navigate(['singlebook/this.mybook.book_id']);
        }, 2000);

        window.location.reload();
    }
  }
  addToShoppingCart() {
    console.log("deneme eren2");
    if (this.takenUserID != 0) {


      if (this.shoppingCartForm.valid) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorizaton': 'Token'
          })
        }

        this.sCartForm = Object.assign({}, this.shoppingCartForm.value);
        console.log(this.sCartForm);
        if (this.sCartForm.quantity <= 0 || this.sCartForm.quantity > this.mybook.stock) {
          Swal.fire({
            title: 'Stock Number ERROR',
            text: 'You can not add 0 or more than the number of stock.',
            icon: 'warning',
          })
        } else {
          this.http.get<Book[]>("http://localhost:8080/shoppingcart/shoppingcartbook/" + this.takenUserID)
            .subscribe(data => {

              console.log(data)
              this.books = data
              var i;
              for (i = 0; i < data.length; i++) {
                this.cartBookIDlist.push(data[i].book_id)

              }
              console.log("ID ARRAY : ")
              console.log(this.cartBookIDlist)
              console.log("book id : ")
              console.log(this.mybook.book_id)
              if (this.cartBookIDlist.includes(this.mybook.book_id)) {
                console.log("bu kitap listede var!")
                Swal.fire({
                  title: 'You have already have this book in your shopping cart.',
                  text: 'Please firstly detele this book from your shopping cart.',
                  icon: 'warning',
                })
              } else {
                this.http.post<ShoppingCartForm>(this.path2, this.sCartForm)
                  .subscribe(data => console.log(this.comment), error => console.log(error));
                Swal.fire({
                  title: 'Book added your shopping cart.',
                  icon: 'success',
                })
                setTimeout(() => {
                  this.router.navigate(['singlebook/this.mybook.book_id']);
                }, 2000);
                window.location.reload();
              }
            })
        }

        /*window.location.reload();*/
      }
    } else {
      Swal.fire({
        title: 'Shopping cart error',
        text: 'Please log in the KabookStore and try it again.',
        icon: 'warning',
      })
    }
  }




  getpage() {
    console.log("get page bumbum");
    console.log(this.mybook.book_id);

  }
  deleteComment(comment: Comment) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorizaton': 'Token'
      })
    }
    this.http.post<Comment>("http://localhost:8080/comment/deletecomment", comment.comment_id)
      .subscribe(data => console.log(data), error => console.log(error));
    Swal.fire({
      title: 'Comment Deleted.',
      text: 'You can rate and comment again.',
      icon: 'success',
    })
    setTimeout(() => {
      this.router.navigate(['singlebook/this.mybook.book_id']);
    }, 2000);
    window.location.reload();

  }

  reportComment(comment: Comment) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorizaton': 'Token'
      })
      
    }
    Swal.fire({
      title: 'Select Ukraine',
      input: 'select',
      inputOptions: {
        '1': 'Sexual comment',
        '2': 'Violent or repulsive comment',
        '3': 'Hateful or abusive comment'
      },
      inputPlaceholder: 'Please select your report description',
      showCancelButton: true,
      /*inputValidator: function (value) {
        return new Promise(function (resolve, reject) {
          if (value === 'UKR') {
            resolve()
          } else {
            reject('You need to select Ukraine :)')
          }
        })
      }*/
    }).then((result) => {
      if (result.value) {
        this.reportForm = this.formBuilder.group({
          comment_id: [comment.comment_id],
          comment_text: [comment.comment_text],
          report_type: [result.value],
        });
        console.log(this.reportForm.value);
        this.reportObj = Object.assign({}, this.reportForm.value);
        console.log(this.reportObj);

        this.http.post<Object>(this.path3, this.reportObj)
        .subscribe(data => console.log(this.reportObj), error => console.log(error));
        

        
        
      
        Swal.fire({
          title: 'THANKS we will investigate this comment.',
          text: 'Thanks for reporting bad comments.',
          icon: 'success',
        })
      }else{
        console.log(comment)
        Swal.fire({
          title: 'Select one reason',
          text: 'Please select one report description and send it again.',
          icon: 'warning',
        })
      }
    });
    
  }

}

