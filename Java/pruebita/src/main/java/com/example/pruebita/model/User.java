package com.example.pruebita.model;

import javax.persistence.*;

//La anotación @Entity le hace saber a Spring que esta clase se convierta en una tabla en la BD
//@Id para poder identificar cada objeto
//@Colummn nos permite agregar info adicional sobre como tratar cada uno de los atributos cuando se conviertan en columnas
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_user", nullable = false)
    private Long idUser;

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

    @Column(name = "password_user")
    private String passwordUser;

    @Column(name = "mailUser")
    private String mailUser;

    public String getPasswordUser() {
        return passwordUser;
    }

    public void setPasswordUser(String passwordUser) {
        this.passwordUser = passwordUser;
    }

    public String getMailUser() {
        return mailUser;
    }

    public void setMailUser(String mailUser) {
        this.mailUser = mailUser;
    }
}
