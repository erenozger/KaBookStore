package com.example.Frisbee.KabookStore.Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.Frisbee.KabookStore.DAO.ShoppingCartBookInterface;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Coupon;
import com.example.Frisbee.KabookStore.Model.myorders;
import com.example.Frisbee.KabookStore.Model.Payment_Information;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart_Book;
import com.example.Frisbee.KabookStore.Model.User;
import com.example.Frisbee.KabookStore.DAO.UserDAO;

@Service
public class UserServiceImpl implements IUserService{

	private ShoppingCartBookInterface shoppingcartbookinterface;
	private UserDAO userDAO;
	
	@Autowired
	public UserServiceImpl (ShoppingCartBookInterface shoppingcartbookinterface, UserDAO userDAO) {
		this.shoppingcartbookinterface = shoppingcartbookinterface;
		this.userDAO = userDAO; 
	}
	
	@Override
	@Transactional
	public boolean addBooktoCart(Book book, int userid) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public boolean deleteBookfromCart(int userid, int bookid) {
		return this.shoppingcartbookinterface.deleteBookfromCart(userid,bookid);
	
	}

	@Override
	@Transactional
	public List<Book> fetchBooksinCart(int userid) {
		return this.shoppingcartbookinterface.fetchBooksinCart(userid);
	}

	@Override
	public List<Coupon> fetchCoupons() {
		return this.shoppingcartbookinterface.fetchCoupons();
	}


	@Override
	@Transactional
	public boolean registerUser(User user) {
		boolean exist = findUserExist(user.getEmail());
		if(exist) {
			return false;
		}
		else {
			user.setInitialProperties();
			return this.userDAO.registerUser(user);
		}
	}

	@Override
	@Transactional
	public User getUserInfo(int userid) {
		return this.userDAO.getUserInfo(userid);
	}

	@Override
	@Transactional
	public Payment_Information getUserPay(int userid) {
		return this.userDAO.getUserPay(userid);
	}

	@Override
	@Transactional
	public boolean createOrder(myorders order) {
		return this.userDAO.createOrder(order);
	}

	@Override
	@Transactional
	public List<Shopping_Cart_Book> fetchCartBooks(int userid) {
		return this.shoppingcartbookinterface.fetchCartBooks(userid);
	}

	@Override
	@Transactional
	public List<myorders> getUserOrders(int userid) {
		return this.userDAO.getUserOrders(userid);
	}

	@Override
	public boolean addToCart(Shopping_Cart_Book shopping_cart_book) {
		return this.shoppingcartbookinterface.addToCart(shopping_cart_book);
	}
  
  	@Override
	@Transactional
	public User loginUser(User user) {
		this.userDAO.loginUser(user).test_print();
		return this.userDAO.loginUser(user);
	}

	@Override
	public boolean findUserExist(String email) {
		this.userDAO.findUserExist(email);
		return false;
	}

	@Override
	@Transactional
	public Shopping_Cart fetchUserShoppingCartID(int userid) {
		return shoppingcartbookinterface.fetchUserShoppingCartID(userid);
	}

	@Override
	@Transactional
	public boolean updateUser(User user) {
		
		return this.userDAO.updateUser(user);
	}

	@Override
	@Transactional
	public Payment_Information addPayInfo(Payment_Information pay_info) {
		return this.userDAO.addPayInfo(pay_info);
	}

	@Override
	@Transactional
	public boolean deletePayInfo(Payment_Information pay_info) {
		return this.userDAO.deletePayInfo(pay_info);
	}

	@Override
	public boolean editPayInfo(Payment_Information pay_info) {
		return this.userDAO.editPayInfo(pay_info);
	}

	@Override
	@Transactional
	public boolean changeStock(Book book, int stock) {
		
		return this.shoppingcartbookinterface.changeStock(book, stock);
	}

	@Override
	public boolean deleteAllShoppingCart(int userid) {
		return shoppingcartbookinterface.deleteAllShoppingCart(userid);
	}


}

