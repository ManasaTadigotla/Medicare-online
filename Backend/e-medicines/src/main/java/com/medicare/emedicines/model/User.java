package com.medicare.emedicines.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Column;
//import jakarta.persistence.DiscriminatorColumn;
//import jakarta.persistence.DiscriminatorType;
//import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import jakarta.persistence.Inheritance;
//import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
//import jakarta.persistence.Table;

@Entity
public class User  {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long phone;
	private String firstName;
	private String lastName;
	private String email;
	//@Column(unique = true,nullable = false)
	//private Long phone;
	private String password;
	private String location;
	@Embedded
	private Address deliveryAddress;
	//private Address mailigAddress;
	
	@OneToMany(mappedBy = "user")
	private List<CustomerOrder> orders=new ArrayList<>();
	
	@OneToMany(mappedBy = "cartuser")
	//@JsonBackReference
	@JsonManagedReference	
	private List<Cart> carts=new ArrayList<>();
	
	public Long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	/*
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	*/
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Address getDeliveryAddress() {
		return deliveryAddress;
	}
	public void setDeliveryAddress(Address deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}
	
	public List<CustomerOrder> getOrders() {
		return orders;
	}
	public void setOrders(List<CustomerOrder> orders) {
		this.orders = orders;
	}
	/*
	public Address getMailigAddress() {
		return mailigAddress;
	}
	public void setMailigAddress(Address mailigAddress) {
		this.mailigAddress = mailigAddress;
	}
	*/
	
	public List<Cart> getCarts() {
		return carts;
	}
	public void setCarts(List<Cart> carts) {
		this.carts = carts;
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
