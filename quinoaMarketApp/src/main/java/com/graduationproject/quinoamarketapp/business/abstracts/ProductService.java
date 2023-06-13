package com.graduationproject.quinoamarketapp.business.abstracts;

import com.graduationproject.quinoamarketapp.entity.Product;
import com.graduationproject.quinoamarketapp.model.ProductRequestDTO;
import com.graduationproject.quinoamarketapp.model.ProductResponseDTO;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface ProductService {
    ProductResponseDTO add(ProductRequestDTO productRequestDTO, MultipartFile productPhoto) throws Exception;
    List<ProductResponseDTO> getAll();
    List<ProductResponseDTO> getDistinctByPredictionName();
    ProductResponseDTO getById(Long id) throws Exception;
    ProductResponseDTO update(ProductRequestDTO productRequest) throws Exception;
    public ProductResponseDTO updateProfilePhoto(Long id, MultipartFile profilePhoto) throws Exception;
    void delete(Long id) throws Exception;
}
