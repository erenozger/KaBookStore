package com.example.Frisbee.KabookStore.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Coupon")
public class Coupon {
	@Id
	@Column(name="Coupon_ID")
	private int Coupon_ID;
	
	@Column(name="Coupon_Number")
	private int Coupon_Number;

	public Coupon(int coupon_ID, int coupon_Number) {
	//	super();   BU NE ALAKA BILMIYORUM EGER BI SIKINTI CIKARSA BURAYA BAKIN
		Coupon_ID = coupon_ID;
		Coupon_Number = coupon_Number;
	}
	public Coupon() {
		//DEFAULT CONSTRUCTOR OLMAZSA HATA VERIYOR
	}
	public int getCoupon_ID() {
		return Coupon_ID;
	}

	public void setCoupon_ID(int coupon_ID) {
		Coupon_ID = coupon_ID;
	}

	public int getCoupon_Number() {
		return Coupon_Number;
	}

	public void setCoupon_Number(int coupon_Number) {
		Coupon_Number = coupon_Number;
	}
	
}
