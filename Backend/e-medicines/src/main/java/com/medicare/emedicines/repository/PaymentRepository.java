package com.medicare.emedicines.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicare.emedicines.model.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {

}
