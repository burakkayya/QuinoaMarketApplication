package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.PortfolioService;
import com.graduationproject.quinoamarketapp.entity.Portfolio;
import com.graduationproject.quinoamarketapp.model.FarmerResponseDTO;
import com.graduationproject.quinoamarketapp.model.PortfolioResponseDTO;
import com.graduationproject.quinoamarketapp.repository.PortfolioRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class PortfolioManager implements PortfolioService {
    @Autowired
    PortfolioRepository portfolioRepository;
    @Autowired
    ModelMapper modelMapper;
    public PortfolioResponseDTO getById(Long id) throws Exception {
        Portfolio portfolio = portfolioRepository.findById(id).orElse(null);
        if(portfolio == null)
            throw new Exception("Portfolio not found with id " + id);
        FarmerResponseDTO farmerResponse = modelMapper.map(portfolio.getFarmer(),FarmerResponseDTO.class);
        PortfolioResponseDTO portfolioResponse = modelMapper.map(farmerResponse,PortfolioResponseDTO.class);
        portfolioResponse.setId(id);
        return portfolioResponse;
    }

    @Override
    public PortfolioResponseDTO getByFarmerId(Long farmerId) throws Exception {
        Portfolio portfolio = portfolioRepository.findByFarmerId(farmerId);
        if(portfolio == null)
            throw new Exception("Portfolio not found!");
        PortfolioResponseDTO portfolioResponse = modelMapper.map(portfolio, PortfolioResponseDTO.class);
        FarmerResponseDTO farmerResponse = modelMapper.map(portfolio.getFarmer(),FarmerResponseDTO.class);
        portfolioResponse.setFarmerDto(farmerResponse);
        return portfolioResponse;
    }
}
