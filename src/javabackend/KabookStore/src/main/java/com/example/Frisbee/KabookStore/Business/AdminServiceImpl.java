package com.example.Frisbee.KabookStore.Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.Frisbee.KabookStore.DAO.AdminDAO;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.myorders;

@Service
public class AdminServiceImpl implements IAdminService {

	private AdminDAO adminDAO;
	
	@Autowired
	public AdminServiceImpl(AdminDAO adminDAO) {
		this.adminDAO = adminDAO;
	}
	
	
	@Override
	@Transactional
	public boolean addBook(Book book) {
		return this.adminDAO.addBook(book);
	}

	@Override
	@Transactional
	public boolean deleteBook(int book_id) {
		return this.adminDAO.deleteBook(book_id);
	}

	@Override
	@Transactional
	public boolean uptadeBook(Book book) {
		return this.adminDAO.uptadeBook(book);
	}

	@Override
	@Transactional
	public List<Book> fetchBooks() {
		return this.adminDAO.fetchBooks();
	}


	@Override
	@Transactional
	public Book getBookById(int book_id) {
		return this.adminDAO.getBookById(book_id);
	}


	@Override
	@Transactional
	public List<myorders> fetchOrders() {
		System.out.println("ORDERBusinessta");

		return this.adminDAO.fetchOrders();
	}


	@Override
	@Transactional
	public boolean deleteOrder(myorders order) {
	
		return this.adminDAO.deleteOrder(order);
	}


	@Override
	@Transactional
	public boolean confirmOrder(myorders order) {
		return this.adminDAO.confirmOrder(order);
	}

}
