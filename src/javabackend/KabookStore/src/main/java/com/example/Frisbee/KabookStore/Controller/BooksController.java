package com.example.Frisbee.KabookStore.Controller;
import java.util.*;

import javax.validation.Valid;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Business.IAdminService;


@RestController
@RequestMapping("/books")
@CrossOrigin(origins = "http://localhost:8081")
public class BooksController {
    private IAdminService adminService;
    
	@Autowired 
	public BooksController(IAdminService adminService) {
		this.adminService = adminService;
	}
	
	@GetMapping("/everybook")
	public List<Book> get(){
		return adminService.fetchBooks();
	}
	
	@GetMapping("/addbooks")

	public void addBook1() {
		
	}
	
	@PostMapping("/addbooks")
	public void addBook(@Valid @RequestBody Book book) {
		adminService.addBook(book);
	}
	
	@RequestMapping(value="/editbooks/{book_id}", method = RequestMethod.GET)
	public Book editBooks1( @PathVariable("book_id") int book_id) {
		Book book = adminService.getBookById(book_id);
		return book;
	}

	@RequestMapping(value="/editbooks/{book_id}", method = RequestMethod.POST)	
	public void editBooks( @PathVariable("book_id") int book_id, @Valid @RequestBody Book book) {
		adminService.uptadeBook(book);
	}

	@RequestMapping(value="/deletebook", method = RequestMethod.POST)
	public void deleteBook(@Valid @RequestBody  int book_id) {
		System.out.println(book_id);
		adminService.deleteBook(book_id);
	}
	
}

