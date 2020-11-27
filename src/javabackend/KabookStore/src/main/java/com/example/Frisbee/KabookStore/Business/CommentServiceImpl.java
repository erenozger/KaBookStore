package com.example.Frisbee.KabookStore.Business;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.Frisbee.KabookStore.DAO.CommentInterface;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Comment;
import com.example.Frisbee.KabookStore.Model.Reported_Comments;

@Service
public class CommentServiceImpl implements ICommentService {
	private CommentInterface commentInterface;
	
	@Autowired
	public CommentServiceImpl(CommentInterface commentInterface) {
		this.commentInterface = commentInterface;
	}
	

	@Override
	@Transactional
	public boolean addComment(Comment comment) {
		return this.commentInterface.addComment(comment);
	}

	@Override
	@Transactional
	public boolean deleteCommentFromBook(Book book, int book_id, int user_id) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	@Transactional
	public List<Comment> fetchComments() {
		return this.commentInterface.fetchComments();
	}

	@Override
	@Transactional
	public List<Comment> getCommentsById(int book_id) {
		return this.commentInterface.getCommentsById(book_id);
		
	}


	@Override
	public boolean deleteComment(int comment_id) {
		return this.commentInterface.deleteComment(comment_id);
	}


	@Override
	@Transactional
	public boolean addReport(Object givenObject) {
		return this.commentInterface.addReport(givenObject);
	}


	@Override
	@Transactional
	public List<Reported_Comments> fetchReports() {
		return this.commentInterface.fetchReports();
	}


	@Override
	@Transactional
	public boolean deleteReport(int report_id) {
		return this.commentInterface.deleteReport(report_id);
	}


	
	
	

}
