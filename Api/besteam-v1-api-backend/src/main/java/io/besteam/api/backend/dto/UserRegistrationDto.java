package io.besteam.api.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegistrationDto {

    private String email;
    private String nickname;
    private String nationality;
    @JsonProperty("player_location")
    private String playerLocation;
    @JsonProperty("date_of_birth")
    private String dateOfBirth;
    private String gender;
    @JsonProperty("favourite_role")
    private String favouriteRole;
    @JsonProperty("accepted_newsletter")
    private boolean acceptedNewsletter;
    @JsonProperty("accepted_privacy")
    private boolean acceptedPrivacy;
}
