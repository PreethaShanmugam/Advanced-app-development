package com.agrifund.agrifunds.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import com.agrifund.agrifunds.Model.Users;

import com.agrifund.agrifunds.Model.UserDetails;

@Repository
   
public interface UserDetailsRepository extends JpaRepository<UserDetails, Long> {

    Optional<Users> findByEmail(String email);
    
}
