package com.example.pruebita.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class pruebitaController {

    @GetMapping("/miInfo")
    public String decirHola(){
        return "Hola, soy Federico, contratame porfa";
    }

}
