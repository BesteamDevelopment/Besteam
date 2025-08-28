package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SkillDto {
    private float dribbling;
    private float trap;
    private float handle;
    private float flair;
    private float elegance;
}
