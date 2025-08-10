package com.besteam.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PositionalFeatureDto {
    private String type;
    private Integer position;
    private Integer size;
    private String color;
}
