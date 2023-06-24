package com.medicare.emedicines.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.emedicines.model.CustomerOrder;
import com.medicare.emedicines.repository.CustomerOrderRepository;

@RestController
public class CustomerOrderController {
	@Autowired
	private CustomerOrderRepository orderRepository;

	//Retrieves all orders placed by customers
	@GetMapping("/customerorders")
	public List<CustomerOrder> GetAllOreders()
	{
		return orderRepository.findAll();
	}
	
	//Get Customers's orders by order id
	@GetMapping("/customerorders/{id}")
	public CustomerOrder getOrderById(Long id)
	{
		if(orderRepository.findById(id)!=null)
		{
			return orderRepository.findById(id).get();
		}
		else
		{
			return null;
		}
	}
	
	
	
	
	
}
