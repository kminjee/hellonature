package com.hellonature.hellonature_back.repository;

import com.hellonature.hellonature_back.model.entity.NonMemberOrder;
import com.hellonature.hellonature_back.model.entity.NonMemberOrderProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NonMemberOrderProductRepository extends JpaRepository<NonMemberOrderProduct, Long> {
    Optional<NonMemberOrderProduct> findById(Long id);
    List<NonMemberOrderProduct> findAllByOrder(NonMemberOrder order);
}
