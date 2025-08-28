package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatsDto {
    private int overall;
    private String statsRole;
    private String foot;
    private int matchesPlayed;
    private int goalsScored;
    private SkillDto skill;
    private MindsetDto mindset;
    private SpeedDto speed;
    private PhysicalDto physical;
    private KickDto kick;
    private PassDto pass;
    private GoalkeeperDto goalkeeper;
}
