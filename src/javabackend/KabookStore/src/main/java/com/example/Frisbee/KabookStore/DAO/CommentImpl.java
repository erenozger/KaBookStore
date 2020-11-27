package com.example.Frisbee.KabookStore.DAO;

import java.text.DecimalFormat;
import java.util.HashMap;
import java.util.List;
import java.util.*;

import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Comment;
import com.example.Frisbee.KabookStore.Model.Reported_Comments;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart;

import javax.persistence.*;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public class CommentImpl implements CommentInterface{
	
	private EntityManager entityManager;
	
	@Autowired
	public CommentImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
	@Override
	@Transactional
	public boolean addComment(Comment comment) {
		Session session = entityManager.unwrap(Session.class);
        session.saveOrUpdate(comment);
		float userrate = comment.getRating();
		int ratedbookid = comment.getBook_id();	
		Session session1 = entityManager.unwrap(Session.class);
		Book temp_book = session1.get(Book.class,ratedbookid ); 
		float oldRating = temp_book.getRating();
		int oldRatingCount = temp_book.getRating_count();
		int newRatingCount = oldRatingCount + 1;
		
		float newRate = ((oldRating * oldRatingCount) + userrate)/newRatingCount;		
		DecimalFormat decimalFormat = new DecimalFormat("#.##");
		float twoDigitsRate = Float.valueOf(decimalFormat.format(newRate));				
		
		temp_book.setRating(twoDigitsRate);
		temp_book.setRating_count(newRatingCount);
		session.save(temp_book);
		
        
        
		return false;
	}

	@Override
	public boolean deleteCommentFromBook(Book book, int book_id, int user_id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public List<Comment> fetchComments() {
		Session session = entityManager.unwrap(Session.class);
		List<Comment> comments = session.createQuery("from Comment", Comment.class).getResultList();
		return comments;
	}

	@Override
	@Transactional
	public List<Comment> getCommentsById(int book_id) {
		Session session = entityManager.unwrap(Session.class);
		String query = "from Comment where Book_id = "+book_id;
		List<Comment> comments = session.createQuery(query, Comment.class).getResultList();
		return comments;
		
	}

	@Override
	@Transactional
	public boolean deleteComment(int comment_id) {
		Session session1 = entityManager.unwrap(Session.class);
		Comment comment = session1.get(Comment.class,comment_id);
		float userRate = comment.getRating();
			
		Session session = entityManager.unwrap(Session.class);
		Comment temp_comment = session.get(Comment.class, comment_id);	
		
		Session session2 = entityManager.unwrap(Session.class);
		Book temp_book = session2.get(Book.class, temp_comment.getBook_id());
		float old_book_rate = temp_book.getRating();
		int old_book_rating_count = temp_book.getRating_count();
		
		float new_book_rate;
		int new_book_rating_count;
		if(old_book_rating_count == 1) {
			new_book_rate = 0;
			new_book_rating_count = 0;
			
		}else {
			new_book_rating_count = old_book_rating_count - 1;
			new_book_rate = (((old_book_rate * old_book_rating_count) - userRate)/new_book_rating_count);
		}
		
		DecimalFormat decimalFormat = new DecimalFormat("#.##");
		float twoDigitsRate2 = Float.valueOf(decimalFormat.format(new_book_rate));	
		
		temp_book.setRating(twoDigitsRate2);
		temp_book.setRating_count(new_book_rating_count);
		session.save(temp_book);
		
		
		session.delete(temp_comment);
		return false;
	}

	@Override
	public boolean addReport(Object givenObject) {
		
		//System.out.println(givenObject);
		List<String> list = new ArrayList<String>();
		
		HashMap hm = (HashMap) givenObject; 
		Set<Map.Entry> set = hm.entrySet();
		Iterator<Map.Entry> j = set.iterator();
		while (j.hasNext()) {
		    Map.Entry me = j.next();
		    list.add(String.valueOf(me.getValue()));
		}
		

		int taken_CommentID = Integer.parseInt(list.get(0));
		String taken_CommentText = list.get(1);
		int taken_ReportType = Integer.parseInt(list.get(2));
		
		
		Session session = entityManager.unwrap(Session.class);
		String query1 = "from Reported_Comments where comment_id = "+taken_CommentID;		
		Reported_Comments temp_report = session.createQuery(query1, Reported_Comments.class).uniqueResult();
		
		
		
		if(temp_report==null) {
			Reported_Comments new_RC = new Reported_Comments();
			
			new_RC.setComment_id(taken_CommentID);
			new_RC.setComment_text(taken_CommentText);
			new_RC.setReport_count(1);
			if(taken_ReportType == 1) {
				new_RC.setReport_1(1);
				new_RC.setReport_2(0);
				new_RC.setReport_3(0);
			}else if(taken_ReportType == 2) {
				new_RC.setReport_1(0);
				new_RC.setReport_2(1);
				new_RC.setReport_3(0);
			}else {
				new_RC.setReport_1(0);
				new_RC.setReport_2(0);
				new_RC.setReport_3(1);
			}		
			session.saveOrUpdate(new_RC);		
			
		}else {
			if(taken_ReportType == 1) {
				int temp_RatingCount = (temp_report.getReport_count() + 1);
				int temp_Report_1 = (temp_report.getReport_1() +1);
				temp_report.setReport_count(temp_RatingCount);
				temp_report.setReport_1(temp_Report_1);
				
			}else if(taken_ReportType == 2) {
				int temp_RatingCount = (temp_report.getReport_count() + 1);
				int temp_Report_2 = (temp_report.getReport_2() +1);
				temp_report.setReport_count(temp_RatingCount);
				temp_report.setReport_2(temp_Report_2);
				
			}else {
				int temp_RatingCount = (temp_report.getReport_count() + 1);
				int temp_Report_3 = (temp_report.getReport_3() +1);
				temp_report.setReport_count(temp_RatingCount);
				temp_report.setReport_3(temp_Report_3);
			}		
			session.saveOrUpdate(temp_report);	
		}
		
		
		
		return false;
	}

	@Override
	@Transactional
	public List<Reported_Comments> fetchReports() {
		Session session = entityManager.unwrap(Session.class);
		List<Reported_Comments> reported_Comments = session.createQuery("from Reported_Comments ORDER BY report_count DESC", Reported_Comments.class).getResultList();
		return reported_Comments;
	}

	@Override
	@Transactional
	public boolean deleteReport(int report_id) {
		System.out.println("Raporların silinme talebi alındı.");
		System.out.println(report_id);
		Session session5 = entityManager.unwrap(Session.class);
		Reported_Comments delete_Report = session5.get(Reported_Comments.class,report_id);
		session5.delete(delete_Report);
		return false;
	}
	

}
