package com.besteam.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SpeedDto {
    private float topSpeed;
    private float acceleration;
    private float reactivity;
    private float agility;
}
