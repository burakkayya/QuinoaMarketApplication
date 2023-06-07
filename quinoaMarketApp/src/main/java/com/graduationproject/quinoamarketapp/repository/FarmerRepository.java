package com.graduationproject.quinoamarketapp.repository;

import com.graduationproject.quinoamarketapp.entity.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface FarmerRepository extends JpaRepository<Farmer,Long> {
    boolean existsByEmailAndPassword(String email, String password);
    Farmer findByEmail(String email);
    @Query(value = "SELECT f FROM Farmer f JOIN f.products p GROUP BY f.id ORDER BY COUNT(p) DESC LIMIT 3")
    List<Farmer> findTopFarmersWithMostProducts();

}
