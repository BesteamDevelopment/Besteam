package io.besteam.api.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AvatarDetails {
    private Body body;
    private Cloth cloth;
    private Tattoo tattoo;
    private Animation animation;
    private Stats stats;
}
