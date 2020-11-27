import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from '../shoppingcart/order';
import { Orderdetail } from '../shoppingcart/orderdetail';
import { User } from '../shoppingcart/user';
import { Payment_Information } from '../shoppingcart/payment_information';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css']
})
export class AdminOrderComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  orders: Order[];
  orderdetails: Orderdetail[] = [];
  users: User[];
  payinfos: Payment_Information[];
  ngOnInit(): void {

    this.http.get<Order[]>("http://localhost:8080/admin/orders").subscribe(data => {
      this.orders = data;


      for (let order of this.orders) {
        let neworderdetail = new Orderdetail();
        let newuser = new User();
        let newpayinfo = new Payment_Information();

        this.http.get<User>("http://localhost:8080/users/userinfo/" + order.user_id).subscribe(data => {
          newuser = data;
        });
        this.http.get<Payment_Information>("http://localhost:8080/users/payinfo/" + order.user_id).subscribe(data => {
          newpayinfo = data;

          neworderdetail.user_firstname = newuser.first_name;
          neworderdetail.user_lastname = newuser.last_name;
          neworderdetail.order_date = order.order_date;
          neworderdetail.order_id = order.order_id;
          neworderdetail.address = newuser.address;
          neworderdetail.cargo_company = order.cargo_company;
          neworderdetail.is_confirmed = order.is_confirmed;
          this.orderdetails.push(neworderdetail);
          //for(let x of this.orderdetails){console.log("XX"+x.user_name);}
        });


      }

    });


  }


  deleteOrder(id:number) {
    //this.orderdetails = this.orderdetails.filter(obj => obj.order_id !== id)
    //for (let order of this.orderdetails) { console.log(order.order_id) }  
    // TABLODAN SILINDI

    for (let order of this.orders) {
      if (order.order_id == id) {
        console.log("SILINECEK ID" + order.order_id)
        this.http.post<Order>("http://localhost:8080/admin/deleteorder", order)
          .subscribe(data => console.log(data), error => console.log(error));
        window.location.reload();
      }
    }
    //deleted = this.orders.filter(obj=>obj.order_id === id);

  }

  confirmOrder(id:number) {
    console.log("geldi");
    for (let order of this.orders) {
      if (order.order_id == id) {
        console.log("CONFIRMLENECEK ID" + order.order_id)
        this.http.post<Order>("http://localhost:8080/admin/confirmorder", order)
          .subscribe(data => console.log(data), error => console.log(error));
        window.location.reload();
      }
    }
  }
}
