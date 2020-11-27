import { Component, OnInit } from '@angular/core';
import { Book } from '../bookadmin/book';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  books : Book[];

  ngOnInit(): void {
    this.http.get<Book[]>("http://localhost:8080/books/everybook").subscribe(data=>{
      this.books = data;
      
      
    });
      }

      singleBook(id:number){
        this.router.navigate(['singlebook',id]);
      }

      filter2(){
        this.router.navigate(['mainpagefiltered',(document.getElementById("1") as HTMLInputElement).value]);
        //window.location.reload();
      }

      filter3(input:string){
        this.router.navigate(['mainpagecategory',input]);
        //window.location.reload();
      }
    }