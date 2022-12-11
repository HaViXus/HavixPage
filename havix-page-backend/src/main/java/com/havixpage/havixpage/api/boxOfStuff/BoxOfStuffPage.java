package com.havixpage.havixpage.api.boxOfStuff;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Getter
@Setter
@Table(name="bos_page")
public class BoxOfStuffPage {
    @Id
    private String id;

    private String title;

    private String shortDescription;

    private Date date;

    private String tags;

    private String content;
}
