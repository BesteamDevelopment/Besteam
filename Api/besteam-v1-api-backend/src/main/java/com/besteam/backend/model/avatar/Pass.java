package com.besteam.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Pass {
    private float shortPass;
    private float drivenPass;
    private float volleyPass;
    private float highPass;
    private float throughPass;
}
