package com.besteam.backend.excepton;

import com.besteam.backend.dto.ValidationErrorResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(UserValidationException.class)
    public ResponseEntity<ValidationErrorResponse> handleValidationException(UserValidationException ex) {
        ValidationErrorResponse errorResponse = new ValidationErrorResponse(ex.getErrors());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}
