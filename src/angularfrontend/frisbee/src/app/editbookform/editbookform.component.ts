import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../bookadmin/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editbookform',
  templateUrl: './editbookform.component.html',
  styleUrls: ['./editbookform.component.css']
})
export class EditbookformComponent implements OnInit {

  id: number;
  mybook:Book;
  path = "http://localhost:8080/books/editbooks";
  editbookform:FormGroup;
  rating: number;
  rating_count:number;
  book_id:number;

  constructor(private http:HttpClient, private formBuilder:FormBuilder, private route:ActivatedRoute,private router:Router) { }
  


  createeditbookFrom(){
    this.editbookform=this.formBuilder.group({
      title:["",Validators.required],
      author:["",Validators.required],
      publisher:["",Validators.required],
      price:["",Validators.required],
      category:["",Validators.required],
      image:["",Validators.required],
      language:["",Validators.required],
      publish_date:["",Validators.required],
      summary:["",Validators.required],
      stock:["",Validators.required],
      type:["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.createeditbookFrom();
    this.mybook = new Book();

    this.id = this.route.snapshot.params['id'];
    //console.log("http://localhost:8080/books/editbooks/"+this.id);
    this.http.get<Book>("http://localhost:8080/books/editbooks/"+this.id)

    .subscribe(data => {

      console.log(data)

      this.mybook = data;
      this.book_id=this.id;
      this.rating=this.mybook.rating;
      this.rating_count=this.mybook.rating_count;
   }, error => console.log(error));
  
   
    }

  edit(){
    console.log("BUMBUM--");
    console.log(this.mybook.book_id);

    if(this.editbookform.valid){
      const httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Authorizaton':'Token'
      })
    }
      this.mybook = Object.assign({},this.editbookform.value);
    
      this.mybook.rating=this.rating;
      this.mybook.rating_count=this.rating_count;
      this.mybook.book_id=this.book_id;
      setTimeout(() => {
        this.router.navigate(['bookadmin']);
    }, 1200);
      
      return this.http.post<Book>("http://localhost:8080/books/editbooks/"+this.id, this.mybook)
      .subscribe(data => console.log(data), error => console.log(error)
      
      );
    }
  }
}
