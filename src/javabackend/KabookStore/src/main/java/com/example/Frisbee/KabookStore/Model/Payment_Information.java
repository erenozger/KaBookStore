package com.example.Frisbee.KabookStore.Model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment_information")
public class Payment_Information {
	@Id
	@Column(name="payment_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int payment_id;
	@Column(name="user_id")
	private int user_id;
	@Column(name="payment_name")
	private String payment_name;
	@Column(name="card_holder")
	private String card_holder;
	@Column(name="CCN")
	private String CCN;
	@Column(name="CVC")
	private int CVC;
	@Column(name="validation_date")
	private java.sql.Date validation_date;
	
	
	public Payment_Information() {
		
	}
	
	
	public Payment_Information(int payment_id, int user_id, String payment_name, String card_holder, String cCN,
			int cVC, Date validation_date) {
		super();
		this.payment_id = payment_id;
		this.user_id = user_id;
		this.payment_name = payment_name;
		this.card_holder = card_holder;
		CCN = cCN;
		CVC = cVC;
		this.validation_date = validation_date;
	}
	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getPayment_name() {
		return payment_name;
	}
	public void setPayment_name(String payment_name) {
		this.payment_name = payment_name;
	}
	public String getCard_holder() {
		return card_holder;
	}
	public void setCard_holder(String card_holder) {
		this.card_holder = card_holder;
	}
	public String getCCN() {
		return CCN;
	}
	public void setCCN(String cCN) {
		CCN = cCN;
	}
	public int getCVC() {
		return CVC;
	}
	public void setCVC(int cVC) {
		CVC = cVC;
	}
	public java.sql.Date getValidation_date() {
		return validation_date;
	}
	public void setValidation_date(java.sql.Date validation_date) {
		this.validation_date = validation_date;
	}
	
	public void test_print() {
		System.out.println("payment_id: " + this.getPayment_id());
		System.out.println("user_id: " + this.getUser_id());
		System.out.println("payment_name: " + this.getPayment_name());
		System.out.println("card_holder: " + this.getCard_holder());
		System.out.println("CCN: " + this.getCCN());
		System.out.println("CVC: " + this.getCVC());
		System.out.println("validation_date: " + this.getValidation_date());		
	}

}
