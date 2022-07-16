package com.example.pruebita.controller;

import com.example.pruebita.model.User;
import com.example.pruebita.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user){
        loginService.addUser(user);
        return "salió todo bien";
    }

    @PostMapping("/login")
    public boolean login(@RequestBody User user){
        return loginService.checkLogin(user);
    }

}
