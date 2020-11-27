package com.example.Frisbee.KabookStore.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Frisbee.KabookStore.Business.IAdminService;
import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.myorders;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:8081")
public class AdminController {
	private IAdminService adminService;

	@Autowired 
	public AdminController(IAdminService adminService) {
		this.adminService = adminService;
	}
	
	@RequestMapping(value="/orders", method = RequestMethod.GET)
	public List<myorders> getOrders(){
		//System.out.println("ORDERCONTROLLERDA");
		return adminService.fetchOrders();
	}
	
	@RequestMapping(value="/deleteorder", method = RequestMethod.POST)
	public boolean deleteOrder(@Valid @RequestBody  myorders order){
		//System.out.println("ORDER DELETE CONTROLLERDA");
		
		return adminService.deleteOrder(order);
	}
	
	@RequestMapping(value="/confirmorder", method = RequestMethod.POST)
	public boolean confirmOrder(@Valid @RequestBody  myorders order){
		System.out.println("ORDER CONFIRM CONTROLLERDA");
		return adminService.confirmOrder(order);
	}
	
	
	
	
	
	
	//     ADMINLE ILGILI BOOK EKLEME CIKARMA HARIC TUM ISLEMLER BU CONTROLLERDA OLACAK
}
