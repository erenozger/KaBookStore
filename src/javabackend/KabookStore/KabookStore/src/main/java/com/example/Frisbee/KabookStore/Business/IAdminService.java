package com.example.Frisbee.KabookStore.Business;

import java.util.List;

import com.example.Frisbee.KabookStore.Model.Book;

public interface IAdminService {
    public boolean addBook(Book book);    
    
    public boolean deleteBook(Book book);
    
    public boolean uptadeBook(Book book);
    
    public List<Book> fetchBooks();
    
}
