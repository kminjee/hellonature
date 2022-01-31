package com.hellonature.hellonature_back.repository;

import com.hellonature.hellonature_back.model.entity.Popupstore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PopupstoreRepository extends JpaRepository<Popupstore, Long> {
    Optional<Popupstore> findById(Long id);

}
