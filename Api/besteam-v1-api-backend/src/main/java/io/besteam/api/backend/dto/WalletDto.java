package io.besteam.api.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class WalletDto {

    @JsonProperty("wallet_code")
    private String walletCode;

    //todo this should be encryted
    //private String password;
}
