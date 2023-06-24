package com.medicare.emedicines.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.emedicines.model.Admin;
import com.medicare.emedicines.repository.AdminRepository;

@RestController
public class AdminController {

	@Autowired
	private AdminRepository adminRepository;
	
	public int changePassword(Long adminId,String password)
	{
		if(adminRepository.findById(adminId).orElseGet(null)!=null)
		{
			Admin admin=new Admin();
			admin.setPassword(password);
			return 1;
		}
		else
		{
			return -1;
		}
	}
	/*
	
	public boolean changePassword(Long phone,String password)
	{
		
		return adminRepository.find
		
	}
	*/
}
