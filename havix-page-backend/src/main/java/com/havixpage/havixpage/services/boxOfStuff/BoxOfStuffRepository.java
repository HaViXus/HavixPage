package com.havixpage.havixpage.services.boxOfStuff;

import com.havixpage.havixpage.api.boxOfStuff.BoxOfStuffPage;
import com.havixpage.havixpage.services.filterableRepository.FilterableRepository;
import com.havixpage.havixpage.services.filterableRepository.FilterableRepositoryImpl;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;


public interface BoxOfStuffRepository extends JpaRepository<BoxOfStuffPage, String>, FilterableRepository<BoxOfStuffPage> {
    @Query(
            value = "SELECT * FROM bos_page",
            nativeQuery = true)
    Page<BoxOfStuffPage> getListOfPages(Pageable pageable);
}
