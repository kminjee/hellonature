package com.hellonature.hellonature_back.repository;

import com.hellonature.hellonature_back.model.entity.Member;
import com.hellonature.hellonature_back.model.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    List<Purchase> findAllByMemberAndRegdateBetweenOrderByCountDesc(Member member, LocalDateTime dateStart, LocalDateTime dateEnd);
}

