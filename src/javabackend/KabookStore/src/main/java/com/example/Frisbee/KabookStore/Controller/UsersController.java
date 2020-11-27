package com.example.Frisbee.KabookStore.Controller;
import javax.persistence.*;

import javax.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.Frisbee.KabookStore.Business.IUserService;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.Payment_Information;
import com.example.Frisbee.KabookStore.Model.User;
import com.example.Frisbee.KabookStore.Model.myorders;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:8081")
public class UsersController {
	private IUserService userService;
	
	@Autowired
	public UsersController(IUserService userService) {
		this.userService = userService;
	}
	
	@RequestMapping(value="/register", method = RequestMethod.POST)
	public boolean registerUser(@Valid @RequestBody User user) {
		try {
			userService.registerUser(user); 
			return true;
		}
		catch (Exception e) {
			e.printStackTrace();
		}
	
		return false;
		
	}
	
	@RequestMapping(value="/register", method = RequestMethod.GET)
	public void registerUser() {
		
	}

	@RequestMapping(value="/userinfo/{userid}", method = RequestMethod.GET)
	public User getInfo(@PathVariable("userid") int userid) {
		return userService.getUserInfo(userid);
	}
	
	@RequestMapping(value="/payinfo/{userid}", method = RequestMethod.GET)
	public Payment_Information getPayInfo(@PathVariable("userid") int userid) {
		return userService.getUserPay(userid);
	}
	
	@RequestMapping(value="/myorder/{userid}", method = RequestMethod.GET)
	public List<myorders> getUserOrders(@PathVariable("userid") int userid) {
		return userService.getUserOrders(userid);
	}

	@RequestMapping(value="/login/{email}", method=RequestMethod.GET)
	public User loginUser(@PathVariable("email") String email) {
		User user = new User(email);
		return userService.loginUser(user);
	}
	
	@RequestMapping(value="/updateuser", method=RequestMethod.POST)
	public boolean updateUser(@Valid @RequestBody User user) {
		return userService.updateUser(user);
	}
	
	@RequestMapping(value="/addpayinfo", method=RequestMethod.POST)
	public Payment_Information updateUser(@Valid @RequestBody Payment_Information pay_info) {
		return userService.addPayInfo(pay_info);
	}
	
	
	@RequestMapping(value="/deletepayinfo", method=RequestMethod.POST)
	public boolean deletePayInfo(@Valid @RequestBody Payment_Information pay_info) {
		return userService.deletePayInfo(pay_info);
	}
	
	@RequestMapping(value="/editpayinfo", method=RequestMethod.POST)
	public boolean editPayInfo(@Valid @RequestBody Payment_Information pay_info) {
		return this.userService.editPayInfo(pay_info);
	}
	
	
	
}
