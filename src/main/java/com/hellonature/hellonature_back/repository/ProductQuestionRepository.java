package com.hellonature.hellonature_back.repository;

import com.hellonature.hellonature_back.model.entity.Member;
import com.hellonature.hellonature_back.model.entity.Product;
import com.hellonature.hellonature_back.model.entity.ProductQuestion;
import com.hellonature.hellonature_back.model.enumclass.Flag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface ProductQuestionRepository extends JpaRepository<ProductQuestion, Long> {
    Optional<ProductQuestion> findById(Long id);
    List<ProductQuestion> findAllByProduct(Product product);
    List<ProductQuestion> findAllByMember(Member member);
    Long countAllByAnsFlag(Flag flag);
    Long countAllByAnsFlagAndRegdateBetween(Flag flag, LocalDateTime start, LocalDateTime end);
    List<ProductQuestion> findTop4ByOrderByIdxDesc();
}
