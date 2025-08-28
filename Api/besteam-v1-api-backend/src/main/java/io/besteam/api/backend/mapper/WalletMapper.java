package io.besteam.api.backend.mapper;

import io.besteam.api.backend.dto.WalletValidationHttpResponse;
import io.besteam.api.backend.model.WalletValidation;

import org.springframework.stereotype.Component;

@Component
public class WalletMapper {

    public WalletValidation mapToWalletValidation(WalletValidationHttpResponse walletValidationHttpResponse) {
        return new WalletValidation(walletValidationHttpResponse.isValid(), walletValidationHttpResponse.getMessage());
    }
}

