package com.example.Frisbee.KabookStore.Model;

import javax.annotation.Generated;
import javax.persistence.*;

@Entity
@Table(name="shopping_cart")

public class Shopping_Cart {
	@Id
	@Column(name="shopping_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Shopping_ID;
	
	
	@Column(name="user_id")
	private int User_ID;

	public Shopping_Cart(int user_ID) {
		this.User_ID = user_ID;
	}
	
	public Shopping_Cart() {
		
	}
	
	public Shopping_Cart(int shopping_ID, int user_ID) {
//		super();
		Shopping_ID = shopping_ID;
		User_ID = user_ID;
	}

	public int getShopping_ID() {
		return Shopping_ID;
	}


	public void setShopping_ID(int shopping_ID) {
		Shopping_ID = shopping_ID;
	}


	public int getUser_ID() {
		return User_ID;
	}


	public void setUser_ID(int user_ID) {
		User_ID = user_ID;
	}
	
}
