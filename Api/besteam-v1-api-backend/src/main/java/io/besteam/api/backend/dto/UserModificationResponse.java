package io.besteam.api.backend.dto;

import lombok.Data;

@Data
public class UserModificationResponse {

    private UserDto user;
    //human-readable message to show to users
    private String message;
    //machine-readable message: technical for debugging
    private String error;

    public UserModificationResponse(String message) {
        this.message = message;
    }

    public UserModificationResponse(UserDto user, String message) {
        this.user = user;
        this.message = message;
    }
}