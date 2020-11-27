package com.example.Frisbee.KabookStore.DAO;
import java.util.List;
import javax.persistence.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.Frisbee.KabookStore.Model.Book;

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
		return false;
	}

	@Override
	@Transactional
	public boolean deleteBook(Book book) {
		return false;
	}

	@Override
	@Transactional
	public boolean uptadeBook(Book book) {
		return false;
	}

	@Override
	@Transactional
	public List<Book> fetchBooks() {
		Session session = entityManager.unwrap(Session.class);
		
		List<Book> books = session.createQuery("from Book", Book.class).getResultList();
		return books;

	}

}
