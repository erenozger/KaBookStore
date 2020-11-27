import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.component.html',
  styleUrls: ['./deletebook.component.css']
})
export class DeletebookComponent implements OnInit {

  constructor(private http:HttpClient, private formBuilder:FormBuilder, private route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("haha");
    
  }
  
}
