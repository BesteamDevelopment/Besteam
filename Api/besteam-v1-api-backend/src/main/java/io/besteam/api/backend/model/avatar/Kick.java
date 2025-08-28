package io.besteam.api.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Kick {
    private float finesseShot;
    private float spinShot;
    private float volleyShot;
    private float powerShot;
    private float headerShot;
    private float acrobaticShot;
    private float penaltyShot;
}
