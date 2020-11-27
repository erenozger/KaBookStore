package com.example.Frisbee.KabookStore.DAO;
import java.util.List;
import javax.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.myorders;

import org.hibernate.*;

@Repository
public class AdminDAOImpl implements AdminDAO{

	private EntityManager entityManager;
	
	@Autowired
	public AdminDAOImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	
	@Override
	@Transactional
	public boolean addBook(Book book) {
		Session session = entityManager.unwrap(Session.class);
		System.out.println("BOOKID="+book.getBook_id());
        session.saveOrUpdate(book);

        return false;
	}

	@Override
	@Transactional
	public boolean deleteBook(int book_id) {
		Session session = entityManager.unwrap(Session.class);
		Book temp_book = session.get(Book.class, book_id);
		session.delete(temp_book);
		return false;
	}

	@Override
	@Transactional
	public boolean uptadeBook(Book book) {
		Session session = entityManager.unwrap(Session.class);
		
		Book temp_book = session.get(Book.class, book.getBook_id());

		temp_book.setAuthor(book.getAuthor());
		temp_book.setCategory(book.getCategory());
		temp_book.setImage(book.getImage());
		temp_book.setLanguage(book.getLanguage());
		temp_book.setPrice(book.getPrice());
		temp_book.setPublish_date(book.getPublish_date());
		temp_book.setPublisher(book.getPublisher());
		temp_book.setRating(book.getRating());
		temp_book.setRating_count(book.getRating_count());
		temp_book.setStock(book.getStock());
		temp_book.setSummary(book.getSummary());
		temp_book.setTitle(book.getTitle());
		temp_book.setType(book.getType());
		

		session.save(temp_book);
		
		return false;
	}

	@Override
	@Transactional
	public List<Book> fetchBooks() {
		Session session = entityManager.unwrap(Session.class);
		List<Book> books = session.createQuery("from Book", Book.class).getResultList();
		return books;
	}

	@Override
	@Transactional
	public Book getBookById(int book_id) {
		Session session = entityManager.unwrap(Session.class);
		Book book =  session.get(Book.class, book_id);
		return book;
	}


	@Override
	@Transactional
	public List<myorders> fetchOrders() {
		Session session = entityManager.unwrap(Session.class);
		//System.out.println("ORDER DAO ");

		//List<Order> orders = null;
		
		List<myorders> orderlar = session.createQuery("from myorders", myorders.class).getResultList();
		
		//System.out.println("QUERYDEN SONRA");

		return orderlar;
		
	}


	@Override
	@Transactional
	public boolean deleteOrder(myorders order) {

		Session session = entityManager.unwrap(Session.class);
		myorders temp_order = session.get(myorders.class, order.getOrder_id());
		session.delete(temp_order);
		return false;
	}


	@Override
	@Transactional
	public boolean confirmOrder(myorders order) {
		Session session = entityManager.unwrap(Session.class);
		
		myorders temp_order = session.get(myorders.class, order.getOrder_id());

		temp_order.setIs_confirmed(1);
		

		session.save(temp_order);
		
		return false;
	}
	
	

}
