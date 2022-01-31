package com.hellonature.hellonature_back.repository;

import com.hellonature.hellonature_back.model.entity.Member;
import com.hellonature.hellonature_back.model.entity.Question;
import com.hellonature.hellonature_back.model.enumclass.Flag;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findById(Long idx);
    void deleteAllByIdxIn(List<Long> idx);
    List<Question> findAllByMember(Member member);
    Long countAllByAnsFlag(Flag flag);
    List<Question> findTop4ByOrderByIdxDesc();
}
