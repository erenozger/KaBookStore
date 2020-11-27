import { Component, OnInit } from '@angular/core';
import { Book } from '../bookadmin/book';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mainpagecategory',
  templateUrl: './mainpagecategory.component.html',
  styleUrls: ['./mainpagecategory.component.css']
})
export class MainpagecategoryComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  books : Book[];
  booksfiltered : Book[] = [];
  comparison:string;
  index: number;
  len: number;
  ngOnInit(): void {
    this.comparison = this.route.snapshot.params['filter']
    this.http.get<Book[]>("http://localhost:8080/books/everybook").subscribe(data=>{
      this.books = data;
      for (this.index = 0, this.len = this.books.length; this.index < this.len; ++this.index) {
        if(this.books[this.index].category.toLowerCase().includes(this.comparison.toLowerCase())){
            this.booksfiltered.push(this.books[this.index])
        }
    }
      
      
    });
      }

      singleBook(id:number){
        this.router.navigate(['singlebook',id]);
      }

      filter3(input:string){
        this.router.navigate(['mainpagecategory',input]);
        //window.location.reload();
      }
      filter2(){
        this.router.navigate(['mainpagefiltered',(document.getElementById("1") as HTMLInputElement).value]);
        //window.location.reload();
      }

      

}
