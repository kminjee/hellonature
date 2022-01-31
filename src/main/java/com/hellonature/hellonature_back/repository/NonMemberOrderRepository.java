package com.hellonature.hellonature_back.repository;

import com.hellonature.hellonature_back.model.entity.NonMemberOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface NonMemberOrderRepository extends JpaRepository<NonMemberOrder, Long> {
    Optional<NonMemberOrder> findById(Long id);
}
