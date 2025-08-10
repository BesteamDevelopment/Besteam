package com.besteam.backend.mapper;

import com.besteam.backend.dto.WalletValidationHttpResponse;
import com.besteam.backend.model.WalletValidation;
import org.springframework.stereotype.Component;

@Component
public class WalletMapper {

    public WalletValidation mapToWalletValidation(WalletValidationHttpResponse walletValidationHttpResponse) {
        return new WalletValidation(walletValidationHttpResponse.isValid(), walletValidationHttpResponse.getMessage());
    }
}

