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

    @JsonProperty("game_wallet")
    private BigDecimal gameWallet;
    private String nickname;
    private String nationality;

    @JsonProperty("player_location")
    private String playerLocation;

    @JsonProperty("date_of_birth")
    private String dateOfBirth;
    private String gender;

    @JsonProperty("favourite_role")
    private String favouriteRole;

    @JsonProperty("actual_role")
    private String actualRole;

    @JsonProperty("accepted_newsletter")
    private Boolean acceptedNewsletter;

    @JsonProperty("accepted_privacy")
    private Boolean acceptedPrivacy;
    private Boolean enabled;

    @JsonProperty("payment_verified")
    private Boolean paymentVerified;
}
