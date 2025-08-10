package com.besteam.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Skill {
    private float dribbling;
    private float trap;
    private float handle;
    private float flair;
    private float elegance;
}
