package com.agrifund.agrifunds.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.agrifund.agrifunds.dto.LoginRequest;
import com.agrifund.agrifunds.Model.Users;
import com.agrifund.agrifunds.Service.UserService;

@RestController
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/api/login")
    public ResponseEntity<Users> login(@RequestBody LoginRequest loginRequest) {
        return userService.login(loginRequest);
    }
}
