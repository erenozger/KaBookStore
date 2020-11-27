package com.example.Frisbee.KabookStore.DAO;
import java.util.List;

import com.example.Frisbee.KabookStore.Model.Book;

public interface AdminDAO {
    
    public boolean addBook(Book book);    
    
    public boolean deleteBook(Book book);
    
    public boolean uptadeBook(Book book);
    
    public List<Book> fetchBooks();
    
    
}
