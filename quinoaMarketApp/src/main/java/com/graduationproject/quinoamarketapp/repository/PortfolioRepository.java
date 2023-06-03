package com.graduationproject.quinoamarketapp.repository;

import com.graduationproject.quinoamarketapp.entity.Portfolio;
import com.graduationproject.quinoamarketapp.model.PortfolioResponseDTO;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PortfolioRepository extends JpaRepository<Portfolio,Long> {
    Portfolio findByFarmerId(Long farmerId);
}
