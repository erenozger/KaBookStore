package com.example.Frisbee.KabookStore.Model;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import net.bytebuddy.asm.Advice.This;

@Entity
@Table(name="user")
public class User {
	@Id
	@Column(name="user_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int user_id;
	
	@Column(name="type")
	private String type;
	
	@Column(name="email")
	private String email;
	
	@Column(name="password")
	private String password;
	
	@Column(name="first_name")
	private String first_name;
	
	@Column(name="last_name")
	private String last_name;
	
	@Column(name="gender")
	private String gender;
	
	@Column(name="address")
	private String address;
	
	@Column(name="gsm")
	private String gsm;
	
	@Column(name="ewallet")
	private float ewallet;
	
	@Column(name="credit")
	private float credit;
	
	@Column(name="birth_date")
	private java.sql.Date birth_date;
	
			
	public User() {
		
	}
	
	public User(String email) {
		this.email = email;
	}
	
	public User(int user_id, String type, String password, String first_name, String last_name, String gender,
			String address, String gsm, float ewallet, float credit, Date birth_date) {
		this.user_id = user_id;
		this.type = type;
		this.password = password;
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
		this.address = address;
		this.gsm = gsm;
		this.ewallet = ewallet;
		this.credit = credit;
		this.birth_date = birth_date;
	}


	public int getUser_id() {
		return user_id;
	}


	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getFirst_name() {
		return first_name;
	}


	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}


	public String getLast_name() {
		return last_name;
	}


	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getGsm() {
		return gsm;
	}


	public void setGsm(String gsm) {
		this.gsm = gsm;
	}


	public float getEwallet() {
		return ewallet;
	}


	public void setEwallet(float ewallet) {
		this.ewallet = ewallet;
	}


	public float getCredit() {
		return credit;
	}


	public void setCredit(float credit) {
		this.credit = credit;
	}


	public java.sql.Date getBirth_date() {
		return birth_date;
	}


	public void setBirth_date(java.sql.Date birth_date) {
		this.birth_date = birth_date;
	}
	
	
	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}

	public void setInitialProperties() {
		this.setCredit(0);
		this.setEwallet(0);
		this.setType("Customer");
		this.setAddress("");
	}

	public void test_print() {
		if(this != null) {
			System.out.println("User_id: " + this.getUser_id());
			System.out.println("Type: " + this.getType());
			System.out.println("E-mail: " + this.getEmail());
			System.out.println("First Name: " + this.getFirst_name());
			System.out.println("Last Name: " + this.getLast_name());
			System.out.println("Gender: " + this.getGender());
			System.out.println("Address: " + this.getAddress());
			System.out.println("GSM: " + this.getGsm());
			System.out.println("E-wallet: " + this.getEwallet());
			System.out.println("E-credit: " + this.getCredit());
			System.out.println("Birth Date: " + this.getBirth_date());
		}
		else {
			System.out.println("This object is null");
		}
		
	}
	
	
}
