package io.besteam.api.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Body {

    private int preset;
    private String tone;
    private int height;
    private int weight;
    private String bodyType;
    private PositionalFeature eye;
    private PositionalFeature eyebrows;
    private PositionalFeature eyelashes;
    private PositionalFeature nose;
    private PositionalFeature mouth;
    private PositionalFeature cheekAndJaw;
    private PositionalFeature ear;

    private PositionalFeature hair;
    private PositionalFeature beard;
}
