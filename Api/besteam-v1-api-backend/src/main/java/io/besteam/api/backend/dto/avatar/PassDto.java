package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PassDto {
    private float shortPass;
    private float drivenPass;
    private float volleyPass;
    private float highPass;
    private float throughPass;
}
