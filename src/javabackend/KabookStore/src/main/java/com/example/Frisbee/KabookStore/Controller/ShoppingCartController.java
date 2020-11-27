package com.example.Frisbee.KabookStore.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Frisbee.KabookStore.Business.IAdminService;
import com.example.Frisbee.KabookStore.Business.IUserService;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Comment;
import com.example.Frisbee.KabookStore.Model.Coupon;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart_Book;
import com.example.Frisbee.KabookStore.Model.myorders;

@RestController
@RequestMapping("/shoppingcart")
@CrossOrigin(origins = "http://localhost:8081")
public class ShoppingCartController {
	private IUserService userservice;

	@Autowired 
	public ShoppingCartController(IUserService userservice) {
		this.userservice = userservice;
	}
	
	@RequestMapping(value="/shoppingcartbook/{userid}", method = RequestMethod.GET)
	public List<Book> get(@PathVariable("userid") int userid){
		return userservice.fetchBooksinCart(userid);
	}
	
	@RequestMapping(value="/cartbook/{userid}", method = RequestMethod.GET)
	public List<Shopping_Cart_Book> getCartBook(@PathVariable("userid") int userid){
		return userservice.fetchCartBooks(userid);
	}
	
	
	@RequestMapping(value="/deleteshoppingcartbook/{userid}", method = RequestMethod.POST)
	public boolean deletebook(@PathVariable("userid") int userid,@Valid @RequestBody  int bookid){
		System.out.println("CONTROLLERDA ve "+ userid + " ve " + bookid);
		return userservice.deleteBookfromCart(userid,bookid);
	}
	
	@RequestMapping(value="/coupons", method = RequestMethod.GET)
	public List<Coupon> getCoupons(){
		System.out.println("KUPON CONTROLLERDA");
		return userservice.fetchCoupons();
	}
	
	
	@RequestMapping(value="/createorder", method = RequestMethod.POST)
	public boolean createOrder(@Valid @RequestBody  myorders order){
		System.out.println("Create CONTROLLERDA");
		System.out.println(order.getOrder_id()+"-"+order.getPayment_id()+
				"-"+order.getUser_id()+"-"+order.getCargo_company());
		return userservice.createOrder(order);
	}
	
	@GetMapping("/addtoshoppingcart")
	public void addToCart() {	
	}
	
	@PostMapping("/addtoshoppingcart")
	public void addToCart(@Valid @RequestBody Shopping_Cart_Book shopping_cart_book) {
		userservice.addToCart(shopping_cart_book);
	}
	
	@RequestMapping(value="/shoppingCartID/{userid}", method = RequestMethod.GET)
	public Shopping_Cart getShoppingCarts(@PathVariable("userid") int userid){
		return userservice.fetchUserShoppingCartID(userid);
	}
	
	
	@RequestMapping(value="/stockchange/{stock}", method = RequestMethod.POST)
	public boolean stockchange(@PathVariable("stock") int stock,@Valid @RequestBody  Book book){
		System.out.println("Stock CONTROLLERDA");
		return userservice.changeStock(book, stock);
	}
	

	
	
	@RequestMapping(value="/allSC", method = RequestMethod.POST)
	public void deleteAllSC(@Valid @RequestBody  int user_id) {
		System.out.println("CONTROLLERA GELDI = " +user_id);
		userservice.deleteAllShoppingCart(user_id);
	}
	
	
	
	
	
}
