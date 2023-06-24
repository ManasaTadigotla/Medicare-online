package com.medicare.emedicines.controller;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.DynamicUpdate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.medicare.emedicines.model.Product;
import com.medicare.emedicines.repository.ProductRepository;

@RestController
@org.springframework.web.bind.annotation.CrossOrigin(origins = "http://localhost:4200/")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;
	
	//Retrieves all the products
	@GetMapping("/products")
	public List<Product> getAllProducts()
	{
		return productRepository.findAll();
	}
	
	//Retrieves top rated products among all categories
	@GetMapping("/topproducts/{noOfProducts}")
	public List<Product> getTopProducts(@PathVariable int noOfProducts)
	{
		return productRepository.getTopProducts(noOfProducts);
	}
	//Retrieves product by its id
	@GetMapping("/products/{id}")
	public Product getProductById(@PathVariable Long id)
	{
		return productRepository.findById(id).get();
	}
	
	//Updates the product details
	@PutMapping("product/update/{id}")
	public Optional<Product> updateProduct(@PathVariable Long id,@RequestBody Product updatedProduct)
	{
		/*
		Product tempProduct=new Product();
		tempProduct= productRepository.findById(id).get();
		tempProduct=product;
		return productRepository.save(tempProduct);
		*/
		Optional<Product> p=productRepository.findById(id);
		if(p!=null)
		{
			productRepository.save(updatedProduct);
		}
		return p;
		
	}
	
	//Adds new product to database
	@PostMapping("/product/add")
	public Product addProduct(@RequestBody Product product)
	{
		return productRepository.save(product);		
	}
	
	//Updates the product details of the given product	
	@PutMapping("product/update")
	public int updateProduct(@RequestBody Product product)
	{
		//Product tempProduct;
		if(productRepository.findById(product.getCode())!=null)
		{
			//tempProduct=productRepository.findById(product.getCode()).get();
			//tempProduct=product;
			productRepository.saveAndFlush(product);
			return 1;
		}
		else
		{
			return -1;
		}		
	}
	
	//Deletes the given product by its id
	@DeleteMapping("product/delete/{id}")
	public int deleteProduct(@PathVariable Long id)
	{
		if(productRepository.findById(id)!=null)
		{
			productRepository.deleteById(id);
			return 1;
		}
		else
		{
			return -1;
		}
	}
}
