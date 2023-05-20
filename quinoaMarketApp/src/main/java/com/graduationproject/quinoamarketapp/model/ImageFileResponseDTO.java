package com.graduationproject.quinoamarketapp.dto.responses;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ImageFileResponseDTO {
    private Long id;
    private String name;
    private String type;
    private byte[] imageData;
}
