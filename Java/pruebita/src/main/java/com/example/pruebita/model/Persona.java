package com.example.pruebita.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

//La anotación @Entity le hace saber a Spring que esta clase se convierta en una tabla en la BD
//@Id para poder identificar cada objeto
//@Colummn nos permite agregar info adicional sobre como tratar cada uno de los atributos cuando se conviertan en columnas
@Entity
public class Persona {
    @Id
    @Column(name = "idPersona", nullable = false)
    private Long idPersona;

    public Long getId() {
        return idPersona;
    }

    public void setId(Long id) {
        this.idPersona = id;
    }

    public String nombre;
    public String apellido;
    public String acercaDeMi;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getAcercaDeMi() {
        return acercaDeMi;
    }

    public void setAcercaDeMi(String acercaDeMi) {
        this.acercaDeMi = acercaDeMi;
    }
}
