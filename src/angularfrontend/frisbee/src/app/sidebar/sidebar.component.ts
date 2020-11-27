import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moreInfo(){
    Swal.fire({
      title: 'COVID19 Coupon!',
      text: 'Coupon Code: 122019',
      imageUrl: 'https://im.haberturk.com/2020/01/22/ver1579758033/2561095_810x458.jpg',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }
  moreInfo2(){
    Swal.fire({
      title: 'Do you want more?',
      text: 'Coupon Code: 122019',
      
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
  }

  moreInfo3(){
    Swal.fire({
      title: 'Guess the answers',
      icon: 'info',
      imageWidth: 400,
      imageHeight: 200,
      html:
          '<label>Find the solutions and get the coupon</label> <br>' +
          '<label>First Digit: ln(e^1/2).1/sin(30)</label> <br>' +
          '<label>Second Digit: 2/&#8734;</label><br>' +
          '<label>Third Digit: ((&#8730;64)/2)-lne</label><br>'  +
          '<label>Fourth Digit: what would you be if you pass the 4th in a race?</label><br>' +
          '<label>Fifth and Sixth Digit: What is the plate code for the city of Ankara ?</label></p><br>',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    })
  }

}
