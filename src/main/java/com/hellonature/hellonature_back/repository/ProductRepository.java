package com.hellonature.hellonature_back.repository;

import com.hellonature.hellonature_back.model.entity.Brand;
import com.hellonature.hellonature_back.model.entity.Category;
import com.hellonature.hellonature_back.model.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Optional<Product> findById(Long id);
    List<Product> findAllByEveCategoryIdxOrderByIdxDesc(Long idx);
    List<Product> findAllByIdxIn(List<Long> idx);
    List<Product> findAllByBrand(Brand brand);
    List<Product> findAllByCategoryAndState(Category category, Integer state);
    List<Product> findAllByCategoryInAndState(List<Category> categories, Integer state);
    List<Product> findAllByEveCategoryAndState(Category category, Integer state);
    List<Product> findAllByEveCategoryInAndState(List<Category> categories, Integer state);
    List<Product> findAllBySalePriceIsNotNullOrderByIdxDesc();
    List<Product> findAllByIdxInOrderByIdxDesc(List<Long> idx);
    Long  countAllByState(Integer state);
    Long countAllByCount(Integer count);
    void deleteAllByIdxIn(List<Long> idxList);
}
