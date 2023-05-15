package com.graduationproject.quinoamarketapp.repository;

import com.graduationproject.quinoamarketapp.entity.ImageFile;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Transactional
@Repository
public interface ImageRepository extends JpaRepository<ImageFile, Long> {
    Optional<ImageFile> findByName(String fileName);
}
