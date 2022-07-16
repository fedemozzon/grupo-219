package com.example.pruebita.service;

import com.example.pruebita.model.User;
import com.example.pruebita.repository.LoginRepository;
import com.example.pruebita.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {
    @Autowired
    private LoginRepository loginRepository;

    public void addUser(User user){
        loginRepository.save(user);
    }

    public boolean checkLogin(User user){
        User currentUser = loginRepository.findByMailUser(user.getMailUser());
        if ( currentUser != null){
            return user.getMailUser().equals(currentUser.getMailUser()) ;

        }
        else  return false;
    }
}
