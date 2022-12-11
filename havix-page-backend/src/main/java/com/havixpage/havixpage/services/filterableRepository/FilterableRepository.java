package com.havixpage.havixpage.services.filterableRepository;

import com.havixpage.havixpage.services.filter.FilterData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface FilterableRepository<T> {
    Page<T> findByFilters(List<FilterData> filters, Class<T> typeParameterClass, Pageable page);
}
