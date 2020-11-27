package com.example.Frisbee.KabookStore.Model;
import javax.annotation.Generated;
import javax.persistence.*;


@Entity
@Table(name="reported_comments")
public class Reported_Comments {
	
	public Reported_Comments(int Report_id,int Comment_id,String Comment_text,int Report_count,int Report_1,int Report_2, int Report_3 ) {
		report_id = Comment_id;
		comment_id = Comment_id;
		comment_text = Comment_text;
		report_count = Report_count;
		report_1 = Report_1;
		report_2 = Report_2;
		report_3 = Report_3;
		
		
	}
	
	
	public Reported_Comments() {
		
	}
	
	
	
	@Id
	@Column(name="report_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int report_id;
	
	@Column(name="comment_id")
	private int comment_id;

	@Column(name="comment_text")
	private String comment_text;

	@Column(name="report_count")
	private int report_count;

	@Column(name="report_1")
	private int report_1;

	@Column(name="report_2")
	private int report_2;
	
	@Column(name="report_3")
	private int report_3;

	public int getReport_id() {
		return report_id;
	}

	public void setReport_id(int report_id) {
		this.report_id = report_id;
	}

	public int getComment_id() {
		return comment_id;
	}

	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}

	public String getComment_text() {
		return comment_text;
	}

	public void setComment_text(String comment_text) {
		this.comment_text = comment_text;
	}

	public int getReport_count() {
		return report_count;
	}

	public void setReport_count(int report_count) {
		this.report_count = report_count;
	}

	public int getReport_1() {
		return report_1;
	}

	public void setReport_1(int report_1) {
		this.report_1 = report_1;
	}

	public int getReport_2() {
		return report_2;
	}

	public void setReport_2(int report_2) {
		this.report_2 = report_2;
	}

	public int getReport_3() {
		return report_3;
	}

	public void setReport_3(int report_3) {
		this.report_3 = report_3;
	}
	
	

	
	
}
