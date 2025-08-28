package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AvatarDetailsDto {
    private BodyDto body;
    private ClothDto cloth;
    private TattooDto tattoo;
    private AnimationDto animation;
    private StatsDto stats;
}
