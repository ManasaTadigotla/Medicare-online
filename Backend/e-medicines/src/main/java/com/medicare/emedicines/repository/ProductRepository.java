package com.medicare.emedicines.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.medicare.emedicines.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

	@Query("SELECT p FROM Product p ORDER BY rating DESC LIMIT ?1")
	public List<Product> getTopProducts(int noOfRows);	
	
	//@Query("select p from Product p where p.c")
	/*
	@Query("update product p set p.isActive=?2 where p.code=?1")
	public Product updateProductStatus(Long id,boolean isActive);
	*/
}
