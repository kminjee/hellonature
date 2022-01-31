package com.hellonature.hellonature_back.repository;

import com.hellonature.hellonature_back.model.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
    Optional<Notice> findById(Long id);
    void deleteAllByIdxIn(List<Long> idx);
    Optional<Notice> findByType(Integer type);
    List<Notice> findTop4ByOrderByIdxDesc();
}
