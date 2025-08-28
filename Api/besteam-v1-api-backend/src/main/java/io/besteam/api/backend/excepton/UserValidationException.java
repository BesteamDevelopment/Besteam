package io.besteam.api.backend.excepton;

import io.besteam.api.backend.dto.FieldError;

import lombok.Getter;

import java.util.List;

@Getter
public class UserValidationException extends RuntimeException{
    private final List<FieldError> errors;

    public UserValidationException(List<FieldError> errors) {
        super("Validation failed");
        this.errors = errors;
    }
}
