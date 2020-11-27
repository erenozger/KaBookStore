
package com.example.Frisbee.KabookStore.Business;
import com.example.Frisbee.KabookStore.Model.User;
import java.util.List;

import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Coupon;
import com.example.Frisbee.KabookStore.Model.myorders;
import com.example.Frisbee.KabookStore.Model.Payment_Information;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart_Book;

public interface IUserService {

	public boolean addBooktoCart(Book book, int userid);
	public boolean deleteBookfromCart(int userid, int bookid);
	public List<Book> fetchBooksinCart(int userid);
	public List<Coupon> fetchCoupons();
	public boolean registerUser(User user);
	public User getUserInfo(int userid);
	public Payment_Information getUserPay(int userid);
	public boolean createOrder(myorders order);
	public List<Shopping_Cart_Book> fetchCartBooks(int userid);
	public List<myorders> getUserOrders(int userid);
	public boolean addToCart(Shopping_Cart_Book shopping_cart_book);
	public User loginUser(User user);
	public boolean findUserExist(String email);
	public Shopping_Cart fetchUserShoppingCartID(int userid);
	public boolean updateUser(User user);
	public Payment_Information addPayInfo(Payment_Information pay_info);
	public boolean deletePayInfo(Payment_Information pay_info);
	public boolean editPayInfo(Payment_Information pay_info);
	public boolean changeStock(Book book, int stock);
	public boolean deleteAllShoppingCart(int userid);

}


