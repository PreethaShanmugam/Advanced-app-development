package com.agrifund.agrifunds.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrifund.agrifunds.Model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

	boolean existsByEmail(String email);

	Users findByEmail(String email);    
}
