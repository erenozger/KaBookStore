package com.example.Frisbee.KabookStore.DAO;
import java.util.List;

import javax.persistence.*;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Coupon;
import com.example.Frisbee.KabookStore.Model.Reported_Comments;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart_Book;

import org.hibernate.*;

@Repository
public class ShoppingCartBookImpl implements ShoppingCartBookInterface {
	
	private EntityManager entityManager;
	
	@Autowired
	public ShoppingCartBookImpl (EntityManager entityManager) {
		this.entityManager = entityManager;
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
		Session session = entityManager.unwrap(Session.class);
		//SHOPPINGCARTBOOK BULUNMALI
		
				String query = "select scb from Shopping_Cart sc, Shopping_Cart_Book scb where sc.Shopping_ID = scb.Shopping_Cart_ID and sc.User_ID ="+userid+" and scb.Book_ID="+bookid;
				System.out.println("DELETED "+query);
			
				//	session.beginTransaction();
		//SQLQuery query2 = session.createSQLQuery(query);
		
				Shopping_Cart_Book book = session.createQuery(query, Shopping_Cart_Book.class).getSingleResult();
				System.out.println("book = "+book.getBook_ID()+"quantity = " + book.getQuantity()+ " cartid="+book.getShopping_Cart_ID());
				
				//session.createNativeQuery(query);
				session.delete(book);
		return false;
	}

	@Override
	@Transactional
	public List<Book> fetchBooksinCart(int userid) {
		Session session = entityManager.unwrap(Session.class);
		String query = "select b from Shopping_Cart sc, Shopping_Cart_Book scb, Book b where sc.User_ID = "+userid +" and sc.Shopping_ID = scb.Shopping_Cart_ID and b.book_id = scb.Book_ID";
		//System.out.println(query);
		List<Book> books = session.createQuery(query, Book.class).getResultList();
		return books;
	}


	@Override
	public List<Coupon> fetchCoupons() {
		Session session = entityManager.unwrap(Session.class);
		String query = "from Coupon";
		System.out.println(query);
		List<Coupon> coupons = session.createQuery(query, Coupon.class).getResultList();
		System.out.println(coupons.get(0).getCoupon_Number());
		return coupons;
	}


	@Override
	@Transactional
	public List<Shopping_Cart_Book> fetchCartBooks(int userid) {
		Session session = entityManager.unwrap(Session.class);
		String query = "select scb from Shopping_Cart sc, Shopping_Cart_Book scb where sc.User_ID = "+userid +" and sc.Shopping_ID = scb.Shopping_Cart_ID";
		System.out.println(query);
		List<Shopping_Cart_Book> books = session.createQuery(query, Shopping_Cart_Book.class).getResultList();
		return books;
		
	}


	@Override
	@Transactional
	public boolean addToCart(Shopping_Cart_Book shopping_cart_book) {
		Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(shopping_cart_book);
        return false;
	}


	@Override
	@Transactional
	public Shopping_Cart fetchUserShoppingCartID(int userid) {
		Session session = entityManager.unwrap(Session.class);
		//List<Shopping_Cart> shoppingCarts = session.createQuery("from Shopping_Cart", Shopping_Cart.class).getResultList();
		String query2 = "from Shopping_Cart where user_id = "+userid;
		Shopping_Cart shoppingCarts = session.createQuery(query2, Shopping_Cart.class).uniqueResult();
		return shoppingCarts;		
	}


	@Override
	@Transactional
	public boolean changeStock(Book book, int stock) {
		Session session = entityManager.unwrap(Session.class);
		System.out.println(book.getTitle()+" stock=" + stock);
		book.setStock(book.getStock()-stock);
		
		session.saveOrUpdate(book);
		return false;
	}
	


	@Override
	@Transactional
	public boolean deleteAllShoppingCart(int userid) {
		Session session = entityManager.unwrap(Session.class);
		String query2 = "from Shopping_Cart where user_id = "+userid;
		Shopping_Cart shoppingCarts = session.createQuery(query2, Shopping_Cart.class).uniqueResult();
		String sql_code = "DELETE FROM Shopping_Cart_Book WHERE shopping_cart_id= " + shoppingCarts.getShopping_ID();
        Query query = session.createQuery(sql_code);
        query.executeUpdate();			
		return false;
	}
	

	

}
