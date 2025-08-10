package com.besteam.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GoalkeeperDto {
    private float catching;
    private float divingReach;
    private float rushing;
    private float throwing;
    private float longKicking;
    private float reflexes;
    private float diving;
}
