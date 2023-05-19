package com.graduationproject.quinoamarketapp.business.concretes;

import com.graduationproject.quinoamarketapp.business.abstracts.IProductService;
import com.graduationproject.quinoamarketapp.entity.Product;
import com.graduationproject.quinoamarketapp.model.ProductRequestDTO;
import com.graduationproject.quinoamarketapp.model.ProductResponseDTO;
import com.graduationproject.quinoamarketapp.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class IProductManager implements IProductService {
    private ProductRepository productRepository;
    private final ModelMapper modelMapper;
    @Override
    public ProductResponseDTO create(ProductRequestDTO productRequestDTO){
        // TODO:FARMER SETLEME ISLEMI YAPILACAK
        Product product = modelMapper.map(productRequestDTO,Product.class);
        productRepository.save(product);
        ProductResponseDTO productResponseDTO= modelMapper.map(product,ProductResponseDTO.class);
        return productResponseDTO;
    }
    @Override
    public List<ProductResponseDTO> getProductList(){
       List<ProductResponseDTO> productResponseDTOList= new ArrayList<>();
       List<Product> productList =  productRepository.findAll();
        for (Product product : productList) {
            ProductResponseDTO productResponseDTO = modelMapper.map(product, ProductResponseDTO.class);
            productResponseDTOList.add(productResponseDTO);
        }
       return productResponseDTOList;
    }
}
