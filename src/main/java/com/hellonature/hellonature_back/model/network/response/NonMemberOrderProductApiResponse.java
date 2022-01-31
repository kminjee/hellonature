package com.hellonature.hellonature_back.model.network.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class NonMemberOrderProductApiResponse {

    private Long idx;


    private Long order;


    private Long product;

    private Integer proCount;
    private Integer proPrice;

    private LocalDateTime regdate;
}
