package io.besteam.api.backend.dto;

import lombok.Getter;

@Getter
public class UserValidation {

    private final boolean valid;
    private final String field;
    private final String message;

    public UserValidation(String field, String message) {
        this.valid = false;
        this.field = field;
        this.message = message;
    }

    public UserValidation() {
        this.valid = true;
        this.field = null;
        this.message = null;
    }
}