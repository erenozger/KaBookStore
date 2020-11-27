package com.example.Frisbee.KabookStore.Model;
import javax.annotation.Generated;
import javax.persistence.*;

@Entity
@Table(name="Shopping_Cart_Book")
public class Shopping_Cart_Book {
	@Id
	@Column(name="idshopping_cart_book")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idshopping_cart_book;
	
	@Column(name="Book_ID")
	private int Book_ID;

	@Column(name="Shopping_Cart_ID")
	private  int Shopping_Cart_ID;
	
	@Column(name="quantity")
	private  int quantity;

	
	public Shopping_Cart_Book() {
		
	}
	
	public Shopping_Cart_Book(int idshopping_cart_book, int book_ID, int shopping_Cart_ID, int quantity) {
		//super();
		this.idshopping_cart_book = idshopping_cart_book;
		Book_ID = book_ID;
		Shopping_Cart_ID = shopping_Cart_ID;
		this.quantity = quantity;
	}

	public int getIdshopping_cart_book() {
		return idshopping_cart_book;
	}

	public void setIdshopping_cart_book(int idshopping_cart_book) {
		this.idshopping_cart_book = idshopping_cart_book;
	}

	public int getBook_ID() {
		return Book_ID;
	}

	public void setBook_ID(int book_ID) {
		Book_ID = book_ID;
	}

	public int getShopping_Cart_ID() {
		return Shopping_Cart_ID;
	}

	public void setShopping_Cart_ID(int shopping_Cart_ID) {
		Shopping_Cart_ID = shopping_Cart_ID;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	

}
