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
public class MemberPaymentApiResponse {
    private Long idx;
    private Long memIdx;
    private Long mordIdx;
    private String memName;

    private Integer price;
    private Integer state;
    private Integer paymentType;
    private String num;

    private String dateStart;
    private String dateEnd;

    private LocalDateTime regdate;
}
