package com.havixpage.havixpage.services.filter;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Path;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class FilterController {
    public <T> List<Predicate> getPredicatesFromFilters(List<FilterData> filters, CriteriaBuilder cb, Root<T> entity) {
        List<Predicate> predicates = new ArrayList<>();
        if(filters != null){
            filters.stream().forEach(filter -> getPredicatesFromFilter(filter, cb, entity, predicates));
        }

        return predicates;
    }

    private<T> void getPredicatesFromFilter(FilterData filter, CriteriaBuilder cb, Root<T> entity, List<Predicate> predicates) {
        FilterData.QueryType queryType = filter.getType();

        switch (queryType) {
            case TITLE:
                convertTitleFilter(filter, cb, entity, predicates);
                break;
            case TAGS:
                convertTagsFilter(filter, cb, entity, predicates);
                break;
            default:
                break;
        }
    }

    private<T> void convertTitleFilter(FilterData filter,CriteriaBuilder cb, Root<T> entity, List<Predicate> predicates) {
        Path<String> entityPath = entity.get(filter.getType().toString());
        predicates.add(cb.like(entityPath, filter.query));
    }

    private<T> void convertTagsFilter(FilterData filter,CriteriaBuilder cb, Root<T> entity, List<Predicate> predicates) {
        Path<String> entityPath = entity.get(filter.getType().toString());
        String[] tags = filter.query.split(";");

        Arrays.stream(tags).forEach(tag-> predicates.add(cb.like(entityPath, "%"+tag+"%")));
    }
}
