package com.besteam.backend.excepton;

import com.besteam.backend.dto.FieldError;
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
