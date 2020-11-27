package com.example.Frisbee.KabookStore.Controller;


import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Frisbee.KabookStore.Business.ICommentService;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Comment;
import com.example.Frisbee.KabookStore.Model.Reported_Comments;



@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:8081")
public class CommentController {
	
	private ICommentService commentservice;
	
	@Autowired
	public CommentController(ICommentService commentservice) {
		this.commentservice = commentservice;
	}
	
	@GetMapping("/allcomments")
	public List<Comment> get(){
		return commentservice.fetchComments();
	}
	
	@RequestMapping(value="/{book_id}", method = RequestMethod.GET)
	public List<Comment> get(@PathVariable("book_id") int book_id){
		return commentservice.getCommentsById(book_id);
	}
	
	@GetMapping("/addcomment")

	public void addBook1() {
		
	}
	
	@PostMapping("/addcomment")
	public void addComment(@Valid @RequestBody Comment comment) {
		commentservice.addComment(comment);
	}
	
	@RequestMapping(value="/deletecomment", method = RequestMethod.POST)
	public void deleteComment(@Valid @RequestBody  int comment_id) {
		System.out.println(comment_id);
		commentservice.deleteComment(comment_id);
	}
	
	@GetMapping("/userReport")
	public void addUserReport1() {
		
	}
	
	@PostMapping("/userReport")
	public void addUserReport(@Valid @RequestBody Object object) {
		commentservice.addReport(object);
	}
	
	@GetMapping("/allreports")
	public List<Reported_Comments> get2(){
		return commentservice.fetchReports();
	}
	
	@RequestMapping(value="/deleteReport", method = RequestMethod.POST)
	public void deleteReport(@Valid @RequestBody  int report_id) {
		System.out.println("CONTROLLERA GELDI = " +report_id);
		commentservice.deleteReport(report_id);
	}


}
