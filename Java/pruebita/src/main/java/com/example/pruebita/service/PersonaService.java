package com.example.pruebita.service;

import com.example.pruebita.model.Persona;
import com.example.pruebita.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService{
    @Autowired
    private PersonaRepository personaRepository;

    public PersonaService() {
    }

    public void addPersona(Persona persona){
        personaRepository.save(persona);
    }

    public void editPersona(Persona persona){
        personaRepository.save(persona);
    }

    public List<Persona> getPersona(){
        return (List<Persona>) personaRepository.findAll();
    }
}
