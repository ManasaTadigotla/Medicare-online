package com.medicare.emedicines.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.emedicines.model.Payment;
import com.medicare.emedicines.repository.PaymentRepository;

@RestController
public class PaymentController {

	@Autowired
	private PaymentRepository paymentRepository;
	
	//Retrieves payment details based on payment id
	@GetMapping("/payments/{id}")
	public Payment getPaymentById(Long id)
	{
		return paymentRepository.findById(id).get();
	}

	
	
}
