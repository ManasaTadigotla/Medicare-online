package com.medicare.emedicines.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.medicare.emedicines.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {

}
