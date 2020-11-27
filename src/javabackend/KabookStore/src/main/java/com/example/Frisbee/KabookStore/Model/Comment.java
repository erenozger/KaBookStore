package com.example.Frisbee.KabookStore.Model;
import javax.annotation.Generated;
import javax.persistence.*;

@Entity
@Table(name="comment")
public class Comment {
	
	
	public Comment(int Comment_id,int Book_id,int User_id,String Comment_date,float Rating,String Comment_text ) {
		comment_id = Comment_id;
		book_id = Book_id;
		user_id = User_id;
		comment_date = Comment_date;
		rating = Rating;
		comment_text = Comment_text;
		
		
	}
	
	
	public Comment() {
		
	}
	
	
	@Id
	@Column(name="comment_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int comment_id;
	
	@Column(name="book_id")
	private int book_id;	
	
	
	@Column(name="user_id")
	private int user_id;
	
	@Column(name="comment_date")
	private String comment_date;
	
	@Column(name="rating")
	private float rating;
	
	@Column(name="comment_text")
	private String comment_text;

	public int getBook_id() {
		return book_id;
	}

	public void setBook_id(int book_id) {
		this.book_id = book_id;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getComment_date() {
		return comment_date;
	}

	public void setComment_date(String comment_date) {
		this.comment_date = comment_date;
	}

	public float getRating() {
		return rating;
	}

	public void setRating(float rating) {
		this.rating = rating;
	}

	public String getComment_text() {
		return comment_text;
	}

	public void setComment_text(String comment_text) {
		this.comment_text = comment_text;
	}


	public int getComment_id() {
		return comment_id;
	}


	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}

	
	
	
}
