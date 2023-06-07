package com.graduationproject.quinoamarketapp.repository;

import com.graduationproject.quinoamarketapp.entity.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FarmerRepository extends JpaRepository<Farmer,Long> {
    boolean existsByEmailAndPassword(String email, String password);
    Farmer findByEmail(String email);
}
