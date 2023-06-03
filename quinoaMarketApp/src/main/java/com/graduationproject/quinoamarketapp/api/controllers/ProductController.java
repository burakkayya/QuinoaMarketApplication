package com.graduationproject.quinoamarketapp.api.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.graduationproject.quinoamarketapp.business.abstracts.ProductService;
import com.graduationproject.quinoamarketapp.model.ProductRequestDTO;
import com.graduationproject.quinoamarketapp.model.ProductResponseDTO;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/products")
public class ProductController{

    @Autowired
   private final ProductService productService;
    @Autowired
    private final ObjectMapper objectMapper;
    @PostMapping("/add")
    ResponseEntity<ProductResponseDTO> addProduct(@RequestParam("file") MultipartFile file,@RequestParam("product") String productRequest) throws Exception {
        ProductRequestDTO productRequestDTO = objectMapper.readValue(productRequest, ProductRequestDTO.class);
        return ResponseEntity.ok(productService.add(productRequestDTO,file));
    }

    @GetMapping()
    ResponseEntity<List<ProductResponseDTO>> getProductList(){
        return ResponseEntity.ok(productService.getAll());
    }

    @GetMapping("/{id}")
    ResponseEntity<ProductResponseDTO> getById(@PathVariable Long id) throws Exception {
        return ResponseEntity.ok(productService.getById(id));
    }

    @PutMapping("/update")
    ResponseEntity<ProductResponseDTO> update(@RequestBody ProductRequestDTO productRequest) throws Exception {
        return ResponseEntity.ok(productService.update(productRequest));
    }

    @DeleteMapping("/delete/{id}")
    ResponseEntity<String> delete(@PathVariable Long id) throws Exception {
        productService.delete(id);
        return ResponseEntity.ok("Product deleted succesfully!");
    }
}
