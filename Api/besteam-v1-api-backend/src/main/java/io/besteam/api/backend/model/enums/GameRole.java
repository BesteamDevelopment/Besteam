package io.besteam.api.backend.model.enums;

import lombok.Getter;

import java.util.Arrays;
import java.util.List;

@Getter
public enum GameRole {
    GOALKEEPER("Goalkeeper"),
    FULL_BACK("Full Back"),
    CENTRAL_DEFENDER("Central Defender"),
    DEFENSIVE_MIDFIELDER("Defensive Midfielder"),
    MIDFIELDER("Midfielder"),
    OFFENSIVE_MIDFIELDER("Offensive Midfielder"),
    SIDE_MIDFIELDER("Side Midfielder"),
    WINGER("Winger"),
    STRIKER("Striker"),
    SECOND_FORWARD("Second Forward");

    private final String name;

    GameRole(String name) {
        this.name = name;
    }

    public static List<String> getAllGameRoles() {
        return Arrays.stream(GameRole.values()).map(GameRole::getName).toList();
    }

    public static GameRole fromName(String name) {
        for (GameRole role : GameRole.values()) {
            if (role.name.equalsIgnoreCase(name)) {
                return role;
            }
        }
        return null;
    }
}