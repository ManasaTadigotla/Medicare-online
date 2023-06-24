package com.medicare.emedicines.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.Query;

import com.medicare.emedicines.model.Cart;
import com.medicare.emedicines.model.User;

public interface CartRepository extends JpaRepository<Cart, Long> {
	public List<Cart> findByCartuser(User cartuser);
	/*
	@Query("select c from Cart c where c.user_id=?1")
	public Optional<Cart> getCartItemsByUser(Long phone);
*/
}
