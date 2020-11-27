package com.example.Frisbee.KabookStore.DAO;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.Query;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.Frisbee.KabookStore.Model.Book;
import com.example.Frisbee.KabookStore.Model.myorders;
import com.example.Frisbee.KabookStore.Model.Payment_Information;
import com.example.Frisbee.KabookStore.Model.Shopping_Cart;
import com.example.Frisbee.KabookStore.Model.User;

@Repository
public class UserDAOImpl implements UserDAO {

	private EntityManager entityManager;
	
	@Autowired
	public UserDAOImpl (EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	 
	@Override
	@Transactional
	public boolean registerUser(User user) {
		try{
			Session session = entityManager.unwrap(Session.class);
			
			/*Save user or raise Exception*/
			session.saveOrUpdate(user);
			
			/*Create shopping cart for that user*/
			User registered_now = findUserByEmail(user.getEmail());
			Shopping_Cart cart = new Shopping_Cart(registered_now.getUser_id());
			session.saveOrUpdate(cart);
			
			return true;
		}
		catch (Exception e) {
			e.printStackTrace();;
			return false;
		}
	}

	@Override
	@Transactional
	public User getUserInfo(int userid) {
		Session session = entityManager.unwrap(Session.class);
		String query = "from User where User_ID = "+userid;
		System.out.println(query);
		User user = session.createQuery(query, User.class).getSingleResult();
		return user;
	}

	
	@Override
	@Transactional
	public Payment_Information getUserPay(int userid) {
		Session session = entityManager.unwrap(Session.class);
		String query = "from Payment_Information where User_ID = "+userid;
		System.out.println(query);
		try {
			Payment_Information info = session.createQuery(query, Payment_Information.class).getSingleResult();
			return info;
		}
		catch (Exception NoResultException){
			System.out.println("PAYMENT INFOSU YOK BU ADAMIN");
			return null;
		}
		
	}

	@Override
	@Transactional
	public boolean createOrder(myorders order) {
		Session session = entityManager.unwrap(Session.class);

			System.out.println("ORDER BURADA");
			session.save(order);
			return false;
	
	}

	@Override
	@Transactional
	public List<myorders> getUserOrders(int userid) {
		Session session = entityManager.unwrap(Session.class);
		
		String query="from myorders where user_id="+userid;
		List<myorders> orderlar = session.createQuery(query, myorders.class).getResultList();
		

		return orderlar;
	}
	
	@Override
	@Transactional
	public User loginUser(User user) {
		Session session = entityManager.unwrap(Session.class);
		String query = "from User WHERE email = '" + user.getEmail() + "'";
		try {
			User user_in_db = session.createQuery(query, User.class).getSingleResult();
			return user_in_db;
		}
		catch(Exception result){
			System.out.println("Problem on database: email does not exist. Return null.");
			result.printStackTrace();
			return null;
		}
  }

	@Override
	public boolean findUserExist(String email) {
		Session session = entityManager.unwrap(Session.class);
		String query = "from User WHERE email = '" + email + "'";
		List<User> users= session.createQuery(query).getResultList();

		if(users.size()>0) 
			return true;
		else 
			return false;
		
	}	
	

	public User findUserByEmail(String email) {
		Session session = entityManager.unwrap(Session.class);
		String query = "from User WHERE email = '" + email + "'";
		
		User user = session.createQuery(query, User.class).getSingleResult();
		return user;
	}

	@Override
	@Transactional
	public boolean updateUser(User user) {
		try {
			Session session = entityManager.unwrap(Session.class);
			session.saveOrUpdate(user);
			return true; 
		}catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	@Transactional
	public Payment_Information addPayInfo(Payment_Information pay_info) {
		try {
			Session session = entityManager.unwrap(Session.class);
			session.saveOrUpdate(pay_info);
			return findPayInfoFromID(pay_info.getUser_id());
		}catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
	
	public Payment_Information findPayInfoFromID(int user_id) {
		Session session = entityManager.unwrap(Session.class);
		String query = "from Payment_Information WHERE user_id = " + user_id;
		List<Payment_Information> pay_infos = session.createQuery(query).getResultList();
		
		if(pay_infos.size()>0) {
			return pay_infos.get(0);
		}
		else {
			return null;
		}
	}

	@Override
	@Transactional
	public boolean deletePayInfo(Payment_Information pay_info) {
		Session session = entityManager.unwrap(Session.class);
		try {
			String sql_code = "DELETE FROM Payment_Information WHERE payment_id= " + pay_info.getPayment_id();
	        Query query = session.createQuery(sql_code);
	        query.executeUpdate();
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
	}

	@Override
	@Transactional
	public boolean editPayInfo(Payment_Information pay_info) {
		Session session = entityManager.unwrap(Session.class);
		try {
			pay_info.test_print();
			session.saveOrUpdate(pay_info);
			return true;
		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}

	}
	
}
