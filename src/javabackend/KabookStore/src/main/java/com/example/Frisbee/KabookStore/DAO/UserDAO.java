package com.example.Frisbee.KabookStore.DAO;
import com.example.Frisbee.KabookStore.Model.myorders;

import java.util.List;

import com.example.Frisbee.KabookStore.Model.Payment_Information;
import com.example.Frisbee.KabookStore.Model.User;

public interface UserDAO {
	public boolean registerUser(User user); 
	public User getUserInfo(int userid);
	public Payment_Information getUserPay(int userid);
	public boolean createOrder(myorders order);
	public List<myorders> getUserOrders(int userid);
	public User loginUser(User user);
	public boolean findUserExist(String email);
	public boolean updateUser(User user);
	public Payment_Information addPayInfo(Payment_Information pay_info);
	public boolean deletePayInfo(Payment_Information pay_info);
	public boolean editPayInfo(Payment_Information pay_info);

}
