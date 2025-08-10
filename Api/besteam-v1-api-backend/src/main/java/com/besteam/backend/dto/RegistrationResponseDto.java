package com.besteam.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
public class RegistrationResponseDto {

    private final String token;

    @JsonProperty("registration_state")
    private final String registrationState;

    @JsonProperty("user_id")
    private final String userId;
}
