import Swal from 'sweetalert2';
import { Reported_Comments } from './reported_comments';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResourceLoader } from '@angular/compiler';


@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent implements OnInit {

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }
  path = "http://localhost:8080/comment/allreports";
  reported_CommentsList : Reported_Comments[];

  
  ngOnInit(): void {


    this.http.get<Reported_Comments[]>(this.path).subscribe(data=>{
    this.reported_CommentsList = data;
    console.log(this.reported_CommentsList)
    });
  }

  deleteComment(taken_RC: Reported_Comments){
    console.log(taken_RC);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorizaton': 'Token'
      })
    }
    this.http.post<Comment>("http://localhost:8080/comment/deletecomment", taken_RC.comment_id)
      .subscribe(data => console.log(data), error => console.log(error));  
    Swal.fire({
      title: 'Comment Deleted.',
      text: 'The reported comment has been deleted from the system.',
      icon: 'success',
    })
    setTimeout(() => {
      this.router.navigate(['singlebook/this.mybook.book_id']);
    }, 1200);
    location.reload();

  }

  deleteReports(taken_RC: Reported_Comments){
    console.log(taken_RC);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorizaton': 'Token'
      })
    }
    this.http.post<Reported_Comments>("http://localhost:8080/comment/deleteReport", taken_RC.report_id)
      .subscribe(data => console.log(data), error => console.log(error));  
    Swal.fire({
      title: 'Reports Deleted',
      text: 'The comment was found smoothly and the reports were deleted.',
      icon: 'success',
    })
    setTimeout(() => {
      this.router.navigate(['singlebook/this.mybook.book_id']);
    }, 2000);
    location.reload();


  }


}
