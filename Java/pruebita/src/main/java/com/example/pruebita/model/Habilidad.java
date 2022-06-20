package com.example.pruebita.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

//La anotación @Entity le hace saber a Spring que esta clase se convierta en una tabla en la BD
//@Id para poder identificar cada objeto
//@Colummn nos permite agregar info adicional sobre como tratar cada uno de los atributos cuando se conviertan en columnas
@Entity
public class Habilidad {
    @Id
    @Column(name = "idHabilidad", nullable = false)
    private Long id;

    @Column(name = "porcentaje_habilidad", nullable = false)
    private int porcentajeHabilidad;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "nombre_habilidad")
    private String nombreHabilidad;

    public int getPorcentajeHabilidad() {
        return porcentajeHabilidad;
    }

    public void setPorcentajeHabilidad(int porcentajeExperiencia) {
        this.porcentajeHabilidad = porcentajeExperiencia;
    }

    public String getNombreHabilidad() {
        return nombreHabilidad;
    }

    public void setNombreHabilidad(String nombreHabilidad) {
        this.nombreHabilidad = nombreHabilidad;
    }
}
