package com.graduationproject.quinoamarketapp.repository;

import com.graduationproject.quinoamarketapp.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product,Long> {
}
