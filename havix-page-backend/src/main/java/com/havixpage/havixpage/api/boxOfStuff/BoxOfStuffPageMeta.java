package com.havixpage.havixpage.api.boxOfStuff;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;

@Builder
@Getter
@Setter
public class BoxOfStuffPageMeta {

    private String id;

    private String title;

    private String shortDescription;

    private Date date;

    private String tags;
}
