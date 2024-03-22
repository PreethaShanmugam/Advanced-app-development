package com.agrifund.agrifunds.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.agrifund.agrifunds.Model.UserDetails;
import com.agrifund.agrifunds.Repository.UserDetailsRepository;

import java.util.List;

@Service
public class UserDetailsService {

    private final UserDetailsRepository userDetailsRepository;

    @Autowired
    public UserDetailsService(UserDetailsRepository userDetailsRepository) {
        this.userDetailsRepository = userDetailsRepository;
    }

    public List<UserDetails> getAllUserDetails() {
        return userDetailsRepository.findAll();
    }

    public UserDetails getUserDetailsById(Long id) {
        return userDetailsRepository.findById(id).orElse(null);
    }

    public UserDetails createUserDetails(UserDetails userDetails) {
        return userDetailsRepository.save(userDetails);
    }

    public UserDetails updateUserDetails(Long id, UserDetails userDetails) {
        if (userDetailsRepository.existsById(id)) {
            userDetails.setId(id); 
            return userDetailsRepository.save(userDetails);
        } else {
            return null;
        }
    }

    public boolean deleteUserDetails(Long id) {
        if (userDetailsRepository.existsById(id)) {
            userDetailsRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
