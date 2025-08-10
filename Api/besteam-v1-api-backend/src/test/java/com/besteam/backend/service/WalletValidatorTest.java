package com.besteam.backend.service;

import com.besteam.backend.dto.WalletValidationHttpResponse;
import com.besteam.backend.mapper.WalletMapper;
import com.besteam.backend.model.WalletValidation;
import com.besteam.backend.repository.WalletValidatorHttpRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpEntity;

import java.util.Random;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class WalletValidatorTest {

    private WalletValidator unit;

    @Mock
    private WalletValidatorHttpRepository walletValidatorHttpRepositoryMock;

    @Mock
    private WalletMapper walletMapperMock;

    private String walletAddress, message;
    private boolean valid;

    @BeforeEach
    void setUp() {
        walletAddress = RandomStringUtils.randomAlphanumeric(20);
        message = RandomStringUtils.randomAlphanumeric(20);
        valid = new Random().nextBoolean();

        unit = new WalletValidator(walletValidatorHttpRepositoryMock, walletMapperMock);
    }

    @Test
    void validate() {
        //given
        WalletValidationHttpResponse response = new WalletValidationHttpResponse(valid, 0, message);
        WalletValidation walletValidation = new WalletValidation(valid, message);

        //when
        when(walletValidatorHttpRepositoryMock.validateAddress(walletAddress)).thenReturn(response);
        when(walletMapperMock.mapToWalletValidation(response)).thenReturn(walletValidation);

        WalletValidation actual = unit.validate(walletAddress);

        //then
        assertEquals(valid, actual.isValid());
        assertEquals(message, actual.getMessage());
    }
}