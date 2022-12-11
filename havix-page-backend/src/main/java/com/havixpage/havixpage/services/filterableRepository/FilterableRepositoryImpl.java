package com.havixpage.havixpage.services.filterableRepository;

import com.havixpage.havixpage.api.boxOfStuff.BoxOfStuffPage;
import com.havixpage.havixpage.services.boxOfStuff.BoxOfStuffRepository;
import com.havixpage.havixpage.services.filter.FilterController;
import com.havixpage.havixpage.services.filter.FilterData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;


import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import java.util.List;


public class FilterableRepositoryImpl<T> implements FilterableRepository<T>{
    @PersistenceContext
    private EntityManager entityManager;

    private final FilterController filterController;

    public FilterableRepositoryImpl() {
        filterController = new FilterController();
    }

    @Override
    public Page findByFilters(List<FilterData> filters, Class<T> typeParameterClass, Pageable page) {
        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<BoxOfStuffPage> criteriaQuery = cb.createQuery(BoxOfStuffPage.class);
        Root<BoxOfStuffPage> entity = criteriaQuery.from(BoxOfStuffPage.class);

        List<Predicate> predicates = filterController.getPredicatesFromFilters(filters, cb, entity);

        criteriaQuery.select(entity)
                .where(cb.and(predicates.toArray(new Predicate[predicates.size()])));

        TypedQuery<BoxOfStuffPage> query = entityManager.createQuery(criteriaQuery);

        List<BoxOfStuffPage> queryResult = query.getResultList();
        query.setFirstResult(page.getPageNumber() * page.getPageSize());
        query.setMaxResults(page.getPageSize());

        int totalRows = queryResult.size();
        Page<BoxOfStuffPage> result = new PageImpl<BoxOfStuffPage>(queryResult, page, totalRows);

        return result;
    }
}
