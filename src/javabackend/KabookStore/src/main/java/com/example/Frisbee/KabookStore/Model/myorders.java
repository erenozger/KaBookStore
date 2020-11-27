package com.example.Frisbee.KabookStore.Model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="myorders")
public class myorders {
	@Id
	@Column(name="order_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int order_id;
	
	@Column(name="payment_id")
	private int payment_id;
	
	@Column(name="order_date")
	private String order_date;
	
	@Column(name="cargo_company")
	private String cargo_company;
	
	@Column(name="user_id")
	private int user_id;
	
	@Column(name="is_confirmed")
	private int is_confirmed;
	
	public myorders(){
		
	}

	public myorders(int order_id, int payment_id, String order_date, String cargo_company, int user_id, int is_confirmed) {
		//super();
		this.order_id = order_id;
		this.payment_id = payment_id;
		this.order_date = order_date;
		this.cargo_company = cargo_company;
		this.user_id = user_id;
		this.is_confirmed = is_confirmed;
	}

	public int getOrder_id() {
		return order_id;
	}

	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public String getOrder_date() {
		return order_date;
	}

	public void setOrder_date(String order_date) {
		this.order_date = order_date;
	}

	public String getCargo_company() {
		return cargo_company;
	}

	public void setCargo_company(String cargo_company) {
		this.cargo_company = cargo_company;
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public int getIs_confirmed() {
		return is_confirmed;
	}

	public void setIs_confirmed(int is_confirmed) {
		this.is_confirmed = is_confirmed;
	}

	
	
}
