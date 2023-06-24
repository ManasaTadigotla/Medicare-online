package com.medicare.emedicines.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.emedicines.model.Cart;
import com.medicare.emedicines.model.CustomerOrder;
import com.medicare.emedicines.model.User;
import com.medicare.emedicines.repository.UserRepository;

@RestController
@org.springframework.web.bind.annotation.CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

	@Autowired
	private UserRepository userRepository;
	
	//Retrieves all users	
	@GetMapping("/users")
	public List<User> getAllUsers()
	{
		return userRepository.findAll();
	}
	
	//Retrieves User by phone number
	@GetMapping("/users/{phone}")
	public Optional<User> findUserByPhone(@PathVariable Long phone)
	{
		return userRepository.findById(phone);
	}

	@GetMapping("/user/check/{phone}")
	public boolean UserExistByPhone(@PathVariable Long phone)
	{
		return userRepository.existsById(phone);
	}
	
	//inserts new user into database
	@PostMapping("/user/add")
	public User addUser(@RequestBody User user)
	{
		return userRepository.save(user);
	}
	
	//Attempts to update user details and returs 1,if updated else return -1
	@PutMapping("/user/update")
	public int updateUser(@RequestBody User user)
	{		
		if(userRepository.findById(user.getPhone())!=null)
		{
			return -1;
		}
		else
		{
			userRepository.save(user);
			return 1;
		}
	}

	//Updates the user with new password
	@PutMapping("/user/changepassword")
	public int changePassword(@PathVariable Long phone,@PathVariable String password)
	{		
		if(userRepository.findById(phone).orElseGet(null)!=null)
		{
			User user=new User();
			user.setPassword(password);
			userRepository.save(user);
			return 1;
		}
		else
			return -1;
	}
	
	
	//Returns 1 ,if user deletes else reuturns -1
	@DeleteMapping("/user/delete/{id}")
	public int deleteUser(@PathVariable Long id)
	{
		if(userRepository.findById(id).get()!=null)
		{
			userRepository.deleteById(id);
			return 1;
		}
		else
		{
			return -1;
		}
	}
	
	//Retrieves order of customer based on user's phone number
	@GetMapping("/user/orders/{phone}")
	public List<CustomerOrder> customerOrdersByPhone(@PathVariable Long phone)
	{
		return userRepository.findById(phone).get().getOrders();
	}
	@GetMapping("/user/carts/{phone}")
	public List<Cart> customerCartItemsByPhone(@PathVariable Long phone)
	{
		return userRepository.findById(phone).get().getCarts();
	}
	
}
