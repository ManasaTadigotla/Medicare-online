package com.medicare.emedicines.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicare.emedicines.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
