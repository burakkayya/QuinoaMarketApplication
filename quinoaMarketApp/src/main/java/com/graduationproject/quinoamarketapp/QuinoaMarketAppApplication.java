package com.graduationproject.quinoamarketapp;

import com.graduationproject.quinoamarketapp.test.ModelTester;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.io.IOException;

@SpringBootApplication
public class QuinoaMarketAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(QuinoaMarketAppApplication.class, args);

        /*try {
            ModelTester.testModel();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }*/

    }

}
