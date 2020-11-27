import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Router } from '@angular/router';
@Component({
  selector: 'app-bookadmin',
  templateUrl: './bookadmin.component.html',
  styleUrls: ['./bookadmin.component.css']
})
export class BookadminComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

  books : Book[];
  
  ngOnInit(): void {
this.http.get<Book[]>("http://localhost:8080/books/everybook").subscribe(data=>{
  this.books = data;
  
  
});
  }
  
  deleteBook(book:Book){
    const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorizaton':'Token'
      })
    }
    console.log("BOOK ID ====");
    console.log(book.book_id);
    this.http.post<Book>("http://localhost:8080/books/deletebook",book.book_id)
    .subscribe(data => console.log(data), error => console.log(error));    
    window.location.reload();
}

  editBook(id:number){
    this.router.navigate(['editbookform',id]);
  }
  singleBook(id:number){
    this.router.navigate(['singlebook',id]);
  }
}
