package com.besteam.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Speed {
    private float topSpeed;
    private float acceleration;
    private float reactivity;
    private float agility;
}
