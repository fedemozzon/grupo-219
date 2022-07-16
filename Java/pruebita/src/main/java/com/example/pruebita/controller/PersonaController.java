package com.example.pruebita.controller;

import com.example.pruebita.model.Persona;
import com.example.pruebita.service.PersonaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PersonaController {
    @Autowired
    private PersonaService personaService;

    @GetMapping("/miInfo")
    public List<Persona> getPersona(){
        return personaService.getPersona();
    }
    @PostMapping("/miInfo")
    public String addPersona(@RequestBody Persona persona){
        personaService.addPersona(persona);
        return "Todo salió bien";
    }

    @PutMapping("/miInfo")
        public String editPersona(@RequestBody Persona persona){
            personaService.editPersona(persona);
            return "Todo salió bien";
        }


}
