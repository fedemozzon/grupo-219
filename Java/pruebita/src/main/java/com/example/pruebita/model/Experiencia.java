package com.example.pruebita.model;

import javax.persistence.*;
import java.util.Date;

//La anotación @Entity le hace saber a Spring que esta clase se convierta en una tabla en la BD
//@Id para poder identificar cada objeto
//@Colummn nos permite agregar info adicional sobre como tratar cada uno de los atributos cuando se conviertan en columnas
@Entity
public class Experiencia {
    @Id
    @Column(name = "idExperiencia", nullable = false)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "nombre_experiencia")
    private String nombreExperiencia;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_inicio_experiencia")
    private Date fechaInicioExperiencia;

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_fin_experiencia")
    private Date fechaFinExperiencia;

    @Column(name = "descripcion_experiencia")
    private String descripcionExperiencia;

    public String getNombreExperiencia() {
        return nombreExperiencia;
    }

    public void setNombreExperiencia(String nombreExperiencia) {
        this.nombreExperiencia = nombreExperiencia;
    }

    public Date getFechaFinExperiencia() {
        return fechaFinExperiencia;
    }

    public void setFechaFinExperiencia(Date fechaFinExperiencia) {
        this.fechaFinExperiencia = fechaFinExperiencia;
    }

    public Date getFechaInicioExperiencia() {
        return fechaInicioExperiencia;
    }

    public void setFechaInicioExperiencia(Date fechaInicioExperiencia) {
        this.fechaInicioExperiencia = fechaInicioExperiencia;
    }

    public String getDescripcionExperiencia() {
        return descripcionExperiencia;
    }

    public void setDescripcionExperiencia(String descripcionExperiencia) {
        this.descripcionExperiencia = descripcionExperiencia;
    }

}
