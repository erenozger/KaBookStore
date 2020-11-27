package com.example.Frisbee.KabookStore.DAO;

import java.util.List;

import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Comment;
import com.example.Frisbee.KabookStore.Model.Reported_Comments;

public interface CommentInterface {
	public boolean addComment(Comment comment);
	public boolean deleteCommentFromBook(Book book, int book_id, int user_id);
	public List<Comment> fetchComments();
    
    public List<Comment> getCommentsById(int book_id);
    
    public boolean deleteComment(int comment_id);
    public boolean addReport(Object givenObject);
    public List<Reported_Comments> fetchReports();
    public boolean deleteReport(int report_id);
    
}
