package com.example.Frisbee.KabookStore.DAO;
import java.util.List;

import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.myorders;

public interface AdminDAO {
    
    public boolean addBook(Book book);    
    
    public boolean deleteBook(int book_id);
    
    public boolean uptadeBook(Book book);
    
    public List<Book> fetchBooks();
    
    public Book getBookById(int book_id);
    
    public List<myorders> fetchOrders();
    
    public boolean deleteOrder(myorders order);
    
    public boolean confirmOrder(myorders order);
    
}
