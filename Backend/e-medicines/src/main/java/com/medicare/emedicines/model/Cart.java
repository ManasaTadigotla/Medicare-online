package com.medicare.emedicines.model;

import java.math.BigDecimal;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
//import jakarta.persistence.JoinTable;
//import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Cart {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private BigDecimal cartValue;
	private int quantity;
	/*
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name="Cart_Product",joinColumns = @JoinColumn(name="cart_id"),
	inverseJoinColumns = @JoinColumn(name="product_id")	)
	private Product product;
	*/
	@OneToMany(mappedBy = "userCart")	
	private List<CartItem> cartItems;
	
	@ManyToOne
	@JsonManagedReference(value="productReference")
	@JoinColumn(name="product_id")
	private Product product;
	
	@ManyToOne
	@JsonBackReference
	@JoinColumn(name="userId")
	private User cartuser;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public BigDecimal getCartValue() {
		return cartValue;
	}

	public void setCartValue(BigDecimal cartValue) {
		this.cartValue = cartValue;
	}

	public List<CartItem> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<CartItem> cartItems) {
		this.cartItems = cartItems;
	}
/*
	public User getUser() {
		return cartuser;
	}

	public void setUser(User user) {
		this.cartuser = user;
	}
*/
	
	public Product getProduct() {
		return product;
	}

	public User getCartuser() {
		return cartuser;
	}

	public void setCartuser(User cartuser) {
		this.cartuser = cartuser;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Cart(int quantity, Product product, User cartuser) {
		super();
		this.quantity = quantity;
		this.product = product;
		this.cartuser = cartuser;
	}
	

	
}
