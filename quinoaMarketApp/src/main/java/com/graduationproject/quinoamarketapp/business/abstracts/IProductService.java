package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.model.ProductRequestDTO;
import com.graduationproject.quinoamarketapp.model.ProductResponseDTO;

import java.util.List;

public interface IProductService {
    ProductResponseDTO create(ProductRequestDTO productRequestDTO);
    List<ProductResponseDTO> getProductList();
}
