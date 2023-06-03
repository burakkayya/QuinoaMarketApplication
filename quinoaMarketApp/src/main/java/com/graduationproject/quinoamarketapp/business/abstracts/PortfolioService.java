package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.model.PortfolioResponseDTO;

public interface PortfolioService {
    PortfolioResponseDTO getById(Long id) throws Exception;
    PortfolioResponseDTO getByFarmerId(Long farmerId) throws Exception;
}
