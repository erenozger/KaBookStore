package com.example.Frisbee.KabookStore.Controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Business.IAdminService;

@RestController
@RequestMapping("/books")
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
	
	
	
}
