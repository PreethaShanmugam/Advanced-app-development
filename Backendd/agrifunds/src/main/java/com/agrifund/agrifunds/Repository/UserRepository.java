package com.agrifund.agrifunds.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrifund.agrifunds.Model.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

	boolean existsByEmail(String email);
	
	Optional<Users> findByEmail(String email);
}
