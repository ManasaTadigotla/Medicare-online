package com.medicare.emedicines.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.medicare.emedicines.model.Cart;
import com.medicare.emedicines.model.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.boot.autoconfigure.security.oauth2.resource.servlet.JwkSetUriJwtDecoderBuilderCustomizer;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.medicare.emedicines.repository.CartRepository;
import com.medicare.emedicines.repository.ProductRepository;
import com.medicare.emedicines.repository.UserRepository;
import com.medicare.emedicines.model.User;

@RestController
@org.springframework.web.bind.annotation.CrossOrigin(origins = "http://localhost:4200/")
public class CartController {
	
	@Autowired
	CartRepository cartRepository;
	
	@Autowired
	ProductRepository productRepo;
	
	@Autowired
	UserRepository userRepo;
	
	@GetMapping("allcart")
	public List<Cart> getAllCartDetails()
	{
		return cartRepository.findAll();
	}
	
	@GetMapping(path="cart/length/{phone}",produces = "text/plain")
	public int getCartLength(@PathVariable Long phone)
	{
		return getCartDetails(phone).size();
	}
	
	@GetMapping("allcart/{id}")
	public Optional<Cart> getCartById(@PathVariable Long id)
	{
		return cartRepository.findById(id);
	}
	
	@PostMapping("cart/add")
	public Cart addNewProductToCart(@RequestBody Cart cart)
	{
		return cartRepository.save(cart);
	}
	
	@GetMapping("addtocart/{productId}/{quantity}/{phone}")
	public Cart addCartItem(@PathVariable Long productId,@PathVariable int quantity,@PathVariable Long phone)
	{
		String status=""; 
		Product product= productRepo.findById(productId).get();
		
		User user=userRepo.findById(phone).get();
		Cart cart = null;
		if(product!=null && user!=null)
		{
			//List<Cart> totalCarts=cartRepository.findAll();
			if(!user.getCarts().isEmpty())
			{
				for(Cart c:user.getCarts() )
				{
					if(productId.equals(c.getProduct().getCode()))
					{					
						status= "duplicate";
						//cart=c;
						//cart.setQuantity(quantity);
						//updateCartItem(cart.getId(), cart);
						return null;
					}					
				}
				if(status!="duplicated")
				{
					cart=new Cart(quantity, product, user);
					cart.setQuantity(quantity);
					cart= cartRepository.save(cart);
					status= "added";
				}
			}
			else
			{
				cart=new Cart(quantity, product, user);
				cart.setQuantity(quantity);
				cart= cartRepository.save(cart);
				status= "added";	
			}
		}
		else
		{
			status= "noproduct";
		}
		
		return cart;
	}
	
	@PutMapping("cart/update/{cartId}/{quantity}")
	public Cart updateCartQuantity(@PathVariable Long cartId,@PathVariable int quantity)
	{
		if(cartRepository.existsById(cartId))
		{
			Cart oldCart=cartRepository.findById(cartId).get();
			oldCart.setQuantity(quantity);
			return cartRepository.save(oldCart);
		}
		else
		{
			return null;
		}
	}
	
	@PutMapping("cart/update/{id}")
	public Cart updateCartItem(@PathVariable Long id, @RequestBody Cart cart)
	{
		if(cartRepository.existsById(id))
		{
			Cart oldCart=cartRepository.findById(cart.getId()).get();
			oldCart=cart;
			return cartRepository.save(oldCart);
		}
		else
		{
			return null;
		}
	}
	@DeleteMapping("cart/delete/{id}")
	public void deleteCartItem(@PathVariable Long id)
	{
		//if(cartRepository.existsById(id))
		//{
			cartRepository.deleteById(id);
		//}
		
	}
	
	@GetMapping("carts/{phone}")
	public List<Cart> getCartDetails(@PathVariable Long phone)
	{
		User user=userRepo.findById(phone).get();
		return cartRepository.findByCartuser(user);
	}
	
	public List<Cart> customerCartItemsByPhone(@PathVariable Long phone)
	{
		List<Cart> allCarts=cartRepository.findAll();
		List<Cart> filteredList=null;
		if(!allCarts.isEmpty())
		{
			filteredList=allCarts.stream()
				      .filter(cart->cart.getCartuser().getPhone().equals(phone))
				      .collect(Collectors.toList());
		}
		return filteredList;
	}
	

}
