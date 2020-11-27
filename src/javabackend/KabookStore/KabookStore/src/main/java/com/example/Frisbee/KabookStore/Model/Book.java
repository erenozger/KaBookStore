package com.example.Frisbee.KabookStore.Model;

import javax.annotation.Generated;
import javax.persistence.*;

@Entity
@Table(name="book")

public class Book {
	
	
	public Book(){
		
	}
	
	public Book(int Book_id,String Title,String Author, String Publisher, float Price, String Category, float Rating, int Rating_count, String Image, String Language, java.sql.Date Publish_date, String Summary, int Stock ,String Type  ){
		book_id = Book_id;
		title = Title;
		author = Author;
		publisher = Publisher;
		price = Price;
		category = Category;
		rating = Rating;
		rating_count = Rating_count;
		image = Image;
		language = Language;
		publish_date = Publish_date; 
		summary = Summary;
		stock = Stock;
		type = Type;
	}
	
	@Id
	@Column(name="book_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int book_id;
	
	@Column(name="title")
	private String title;
	
	@Column(name="author")
	private String author;
	
	@Column(name="publisher")
	private String publisher;
	
	@Column(name="price")
	private float price;
	
	@Column(name="category")
	private String category;
	
	@Column(name="rating")
	private float rating;
	
	@Column(name="rating_count")
	private int rating_count;
	
	@Column(name="image")
	private String image;
	
	@Column(name="language")
	private String language;
	
	@Column(name="publish_date")
	private java.sql.Date publish_date;
	
	@Column(name="summary")
	private String summary;
	
	@Column(name="stock")
	private int stock;
	
	@Column(name="type")
	private String type;
	
	public int getBook_id() {
		return book_id;
	}
	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getPublisher() {
		return publisher;
	}
	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public float getRating() {
		return rating;
	}
	public void setRating(float rating) {
		this.rating = rating;
	}
	public int getRating_count() {
		return rating_count;
	}
	public void setRating_count(int rating_count) {
		this.rating_count = rating_count;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public java.sql.Date getPublish_date() {
		return publish_date;
	}
	public void setPublish_date(java.sql.Date publish_date) {
		this.publish_date = publish_date;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public int getStock() {
		return stock;
	}
	public void setStock(int stock) {
		this.stock = stock;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
}
