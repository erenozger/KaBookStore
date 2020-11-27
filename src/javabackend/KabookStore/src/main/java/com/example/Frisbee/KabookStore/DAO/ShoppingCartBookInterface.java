package com.example.Frisbee.KabookStore.DAO;

import java.util.List;

import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Coupon;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart_Book;

public interface ShoppingCartBookInterface {

	public boolean addBooktoCart(Book book, int userid);
	public boolean deleteBookfromCart(int userid, int bookid);
	public List<Book> fetchBooksinCart(int userid);
	public List<Coupon> fetchCoupons();
	public List<Shopping_Cart_Book> fetchCartBooks(int userid);
	public boolean addToCart(Shopping_Cart_Book shopping_cart_book);
	public Shopping_Cart fetchUserShoppingCartID(int userid);
	public boolean changeStock(Book book,int stock);
	public boolean deleteAllShoppingCart(int userid);

}
