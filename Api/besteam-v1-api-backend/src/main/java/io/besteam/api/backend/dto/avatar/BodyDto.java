package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BodyDto {
    private int preset;
    private String tone;
    private int height;
    private int weight;
    private String bodyType;
    private PositionalFeatureDto eye;
    private PositionalFeatureDto eyebrows;
    private PositionalFeatureDto eyelashes;
    private PositionalFeatureDto nose;
    private PositionalFeatureDto mouth;
    private PositionalFeatureDto cheekAndJaw;
    private PositionalFeatureDto ear;
    private PositionalFeatureDto hair;
    private PositionalFeatureDto beard;
}
