package com.graduationproject.quinoamarketapp.model;

import com.graduationproject.quinoamarketapp.entity.ImageFile;
import lombok.Data;

@Data
public class ProductResponseDTO {
    private Long id;
    private Long farmerId;
    private ImageFile imageFile;
    private String info;
    private Long stock;
    private String predictionName;
}