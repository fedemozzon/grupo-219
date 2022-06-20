package com.example.pruebita.model;

import javax.persistence.*;
import java.util.Date;

//La anotación @Entity le hace saber a Spring que esta clase se convierta en una tabla en la BD
//@Id para poder identificar cada objeto
//@Colummn nos permite agregar info adicional sobre como tratar cada uno de los atributos cuando se conviertan en columnas
@Entity
public class Estudio {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Column(name = "nombre_titulo_obtenido")
    private String nombreTituloObtenido;

    @Column(name = "descripcion_estudio")
    private String descripcionEstudio;

    public String getNombreTituloObtenido() {
        return nombreTituloObtenido;
    }

    public void setNombreTituloObtenido(String nombreTituloObtenido) {
        this.nombreTituloObtenido = nombreTituloObtenido;
    }

    public String getDescripcionEstudio() {
        return descripcionEstudio;
    }

    public void setDescripcionEstudio(String descripcionEstudio) {
        this.descripcionEstudio = descripcionEstudio;
    }

    @Temporal(TemporalType.DATE)
    @Column(name = "fecha_obtencion_estudio")
    private Date fechaObtencionEstudio;

    public Date getFechaObtencionEstudio() {
        return fechaObtencionEstudio;
    }

    public void setFechaObtencionEstudio(Date fechaObtencionEstudio) {
        this.fechaObtencionEstudio = fechaObtencionEstudio;
    }
}
