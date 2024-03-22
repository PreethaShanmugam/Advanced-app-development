package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import dto.LoginRequest;
import model.Users;
import Service.UserService;

@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/login")
    public ResponseEntity<Users> login(@RequestBody LoginRequest loginRequest) {
        return userService.login(loginRequest);
    }
}