package com.besteam.backend.model.enums;

import lombok.Getter;

import java.util.Arrays;
import java.util.List;

@Getter
public enum Role {
    FREE_AGENT("Free Agent"),
    TEAM_PLAYER("Team Player"),
    COACH("Coach"),
    PRESIDENT("President");

    private final String name;

    Role(String name) {
        this.name = name;
    }

    public static List<String> getAllRoles() {
        return Arrays.stream(Role.values()).map(Role::getName).toList();
    }

    public static Role fromName(String name) {
        for (Role role : Role.values()) {
            if (role.name.equalsIgnoreCase(name)) {
                return role;
            }
        }
        return null;
    }
}