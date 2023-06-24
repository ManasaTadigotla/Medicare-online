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
import org.springframework.web.bind.annotation.RestController;

//import com.medicare.emedicines.model.Admin;
import com.medicare.emedicines.model.Category;
import com.medicare.emedicines.model.Product;
import com.medicare.emedicines.repository.CategoryRepository;
import com.medicare.emedicines.repository.ProductRepository;



@RestController
@org.springframework.web.bind.annotation.CrossOrigin(origins = "http://localhost:4200/")
public class CategoryController {
	@Autowired
	private CategoryRepository categoryRepository;	
	@Autowired
	private ProductRepository productRepo;
	
	
	//Gets Category by category id
	@GetMapping("/categories/{id}")
	public Optional<Category> getCategoryById(@PathVariable Long id)
	{
		return categoryRepository.findById(id);
	}
	
	//Retrieves available categories
	@GetMapping("/categories")
	public List<Category> getAllCategories()
	{
		return categoryRepository.findAll();
	}
	
	//Retrieves the product list based on the given category
	@GetMapping("/productsbycategory/{categoryId}")
	public List<Product> getProductsByCategoryId(@PathVariable Long categoryId)
	{
		return categoryRepository.findById(categoryId).get().getProducts();
	}
	
	
	//Adds new category to category table
	@PostMapping("/category/add")
	public Category addCategory(@RequestBody Category category)
	{
		return categoryRepository.save(category);
	}
	@PostMapping("/category/addproduct/{categoryId}")
	public Product addProductToCategory(@PathVariable Long categoryId,@RequestBody Product product)
	{
		Category category=categoryRepository.findById(categoryId).get();
		category.addProduct(product);
		categoryRepository.save(category);
		return productRepo.save(product);
		
		//return product;
		
	}
	
	//Saves the Updated Category details 
	@PutMapping("/category/update")
	public int updateCategory(@RequestBody Category category)
	{
	
		if(categoryRepository.findById(category.getId())!=null)
		{
			categoryRepository.save(category);
			return 1 ;
		}
		else
			return -1;
	}
	
	//checks whether category exists with the id provided.Deletes that record and return 1 else -1
	@DeleteMapping("/category/delete/{id}")
	public int deleteCategory(@PathVariable Long id)
	{
		if(categoryRepository.findById(id) != null)
		{
		
			categoryRepository.deleteById(id);
			return 1;
		}
		else
		{
			return -1;
		}
	}

	
}
