package com.agrifund.agrifunds.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.agrifund.agrifunds.Model.Bank;

@Repository
public interface BankRepository extends JpaRepository<Bank, Long> {
    
}
