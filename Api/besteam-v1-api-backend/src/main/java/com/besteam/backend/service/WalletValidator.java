package com.besteam.backend.service;

import com.besteam.backend.dto.WalletValidationHttpResponse;
import com.besteam.backend.mapper.WalletMapper;
import com.besteam.backend.model.WalletValidation;
import com.besteam.backend.repository.WalletValidatorHttpRepository;
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
