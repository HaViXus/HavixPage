package com.havixpage.havixpage.services.filter;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
public class Filter implements Serializable {
    List<FilterData> filters;
}
