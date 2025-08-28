package io.besteam.api.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PositionalFeature {
    private String type;
    private Integer position;
    private Integer size;
    private String color;
}
