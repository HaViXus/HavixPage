package com.havixpage.havixpage.services.filter;

import com.fasterxml.jackson.annotation.JsonCreator;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

public class FilterData implements Serializable {
    @Getter
    @Setter
    String query;
    QueryType type;

    public QueryType getType() {
        return type;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public enum QueryType {
        TAGS("tags"),
        TITLE("title");

        String label;

        private QueryType(String label) {
            this.label = label;
        }

        public String getText(){return this.label;}

        @JsonCreator
        public static QueryType fromText(String text){
            for(QueryType r : QueryType.values()){
                if(r.getText().equals(text)){
                    return r;
                }
            }
            throw new IllegalArgumentException();
        }

        @Override
        public String toString() {
            return label;
        }
    }
}
