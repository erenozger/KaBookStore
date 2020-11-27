package com.example.Frisbee.KabookStore.Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.Frisbee.KabookStore.DAO.AdminDAO;
import com.example.Frisbee.KabookStore.Model.Book;

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
	public boolean deleteBook(Book book) {
		return this.adminDAO.deleteBook(book);
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

}
