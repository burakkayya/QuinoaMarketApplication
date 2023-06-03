package com.graduationproject.quinoamarketapp.api.controllers;

import com.graduationproject.quinoamarketapp.business.abstracts.PortfolioService;
import com.graduationproject.quinoamarketapp.model.PortfolioResponseDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor
@RestController
@RequestMapping("/api/portfolio")
public class PortfolioController {
    @Autowired
    private final PortfolioService portfolioService;

    @GetMapping("/{id}")
    public ResponseEntity<PortfolioResponseDTO> getById(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(portfolioService.getById(id));
    }
    @GetMapping
    public ResponseEntity<PortfolioResponseDTO> getByFarmerId(@RequestParam("farmerId") Long farmerId) throws Exception {
        return ResponseEntity.ok(portfolioService.getByFarmerId(farmerId));
    }
}
