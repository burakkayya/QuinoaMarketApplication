package com.graduationproject.quinoamarketapp.api.controllers;

import com.graduationproject.quinoamarketapp.business.abstracts.IProductService;
import com.graduationproject.quinoamarketapp.model.ProductRequestDTO;
import com.graduationproject.quinoamarketapp.model.ProductResponseDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/product")
public class ProductController{

    @Autowired
   private final IProductService productService;
    @PostMapping("/")
    ProductResponseDTO createProduct(@RequestBody ProductRequestDTO productRequestDTO){
        return productService.create(productRequestDTO);
    }
    @GetMapping("/products")
    List<ProductResponseDTO> getProductList(){
        return productService.getProductList();
    }

}
