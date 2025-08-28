package io.besteam.api.backend.service;

import io.besteam.api.backend.dto.WalletValidationHttpResponse;
import io.besteam.api.backend.mapper.WalletMapper;
import io.besteam.api.backend.model.WalletValidation;
import io.besteam.api.backend.repository.WalletValidatorHttpRepository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WalletValidator {

    private final WalletValidatorHttpRepository walletValidatorHttpRepository;
    private final WalletMapper walletMapper;

    public WalletValidation validate(String walletAddress) {
        WalletValidationHttpResponse walletValidationHttpResponse = walletValidatorHttpRepository.validateAddress(walletAddress);

        return walletMapper.mapToWalletValidation(walletValidationHttpResponse);
    }
}
