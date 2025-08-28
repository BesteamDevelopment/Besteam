package io.besteam.api.backend.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private String id;

    @JsonProperty("wallet_code")
    private String walletCode;

    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private String email;
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private String nickname;

    @JsonProperty("check_newsletter")
    private boolean checkNewsletter;
    @JsonProperty("check_privacy")
    private boolean checkPrivacy;
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private String nationality;

    @JsonProperty("player_location")
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private String playerLocation;

    @JsonProperty("date_of_birth")
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "UTC")
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private LocalDate dateOfBirth;

    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private String gender;

    @JsonProperty("favourite_role")
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private String favouriteRole;
    private boolean enabled;

    @JsonProperty("is_verified")
    private boolean isVerified;

    @JsonProperty("created_at")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "UTC")
    private Instant createdAt;

    @JsonProperty("game_wallet")
    private BigDecimal gameWallet;

    @JsonProperty("actual_role")
    private String actualRole;

    @JsonProperty("avatar_id")
    @JsonInclude(value = JsonInclude.Include.NON_NULL)
    private String avatarId;

    @JsonProperty("registration_state")
    private String registrationState;
}
