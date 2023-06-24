package com.medicare.emedicines.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicare.emedicines.model.CustomerOrder;

public interface CustomerOrderRepository extends JpaRepository<CustomerOrder, Long>{


}
