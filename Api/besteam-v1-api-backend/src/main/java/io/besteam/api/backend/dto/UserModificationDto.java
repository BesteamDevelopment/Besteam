package io.besteam.api.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
public class UserModificationDto {

    private String nickname;

    @JsonProperty("player_location")
    private String playerLocation;

    private String gender;

    @JsonProperty("favourite_role")
    private String favouriteRole;

    @JsonProperty("accepted_newsletter")
    private Boolean acceptedNewsletter;

}
