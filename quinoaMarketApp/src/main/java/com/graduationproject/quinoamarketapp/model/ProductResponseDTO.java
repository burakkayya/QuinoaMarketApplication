package com.graduationproject.quinoamarketapp.model;

import lombok.Data;

@Data
public class ProductResponseDTO {
    private Long id;
    private Long farmerId;
    private byte[] productPhoto;
    private String info;
    private boolean stockStatus;
    private String predictionName;
}
