package com.medicare.emedicines.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medicare.emedicines.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

	@Query("select u from User u where u.phone=?1")
	public User findUserByPhoneNumber(Long phoneNumber);
	
	
	
}
