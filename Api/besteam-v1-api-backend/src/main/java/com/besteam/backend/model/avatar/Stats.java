package com.besteam.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Stats {
    private int overall;
    private String statsRole;
    private String foot;
    private int matchesPlayed;
    private int goalsScored;
    private Skill skill;
    private Mindset mindset;
    private Speed speed;
    private Physical physical;
    private Kick kick;
    private Pass pass;
    private Goalkeeper goalkeeper;
}
