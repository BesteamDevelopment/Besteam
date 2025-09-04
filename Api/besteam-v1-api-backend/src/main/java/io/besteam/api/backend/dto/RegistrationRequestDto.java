package io.besteam.api.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationRequestDto {

    private String email;

    private String nickname;

    private String password;

    @JsonProperty("confirm_password")
    private String confirmPassword;

    @JsonProperty("check_newsletter")
    private boolean checkNewsletter;

    @JsonProperty("check_privacy")
    private boolean checkPrivacy;
}
