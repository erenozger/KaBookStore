import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../bookadmin/book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

  @Component({
  selector: 'app-addbookform',
  templateUrl: './addbookform.component.html',
  styleUrls: ['./addbookform.component.css']
})
export class AddbookformComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router) { }
  path = "http://localhost:8080/books/addbooks";
  addbookform:FormGroup;
  value: String;
  book:Book = new Book();

  createaddbookFrom(){
    this.addbookform=this.formBuilder.group({
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
    this.createaddbookFrom();
    
  }

  add(){
    
    if(this.addbookform.valid){
      const httpOptions={
        headers:new HttpHeaders({
          'Content-Type':'application/json',
          'Authorizaton':'Token'
        })
      }
      
      console.log(this.addbookform.value);
      this.book = Object.assign({},this.addbookform.value);
      console.log(this.book)
      setTimeout(() => {
        this.router.navigate(['bookadmin']);
      }, 1200);
      return this.http.post<Book>(this.path, this.book)
      .subscribe(data => console.log(this.book), error => console.log(error));
    }
  }

}


//<div class="input-group">
  //              <div class="input-group-prepend">
    //              <span class="input-group-text" id="image">Upload</span>
      //          </div>
        //        <div class="custom-file">
          //        <input type="file" class="custom-file-input" id="browsefile"
            //        aria-describedby="image">
              //    <label class="custom-file-label" for="browsefile">Choose file</label>
                //</div>
              //</div>