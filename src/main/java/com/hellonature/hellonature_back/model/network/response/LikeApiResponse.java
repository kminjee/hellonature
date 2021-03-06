package com.hellonature.hellonature_back.model.network.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LikeApiResponse {

    private Long proIdx;
    private String proName;
    private String proImg;
    private String proWeightSize;
    private Integer proLikeCount;

    private Long mgIdx;
    private String mgTitle;
    private String mgImg;
    private Integer mgLikeCount;

}
