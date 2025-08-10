package com.besteam.backend.mapper;

import com.besteam.backend.dto.WalletValidationHttpResponse;
import com.besteam.backend.model.WalletValidation;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Random;

import static org.junit.jupiter.api.Assertions.assertEquals;

class WalletMapperTest {

    private WalletMapper unit;

    private String message;
    private boolean valid;

    @BeforeEach
    void setUp() {
        unit = new WalletMapper();

        message = RandomStringUtils.randomAlphanumeric(20);
        valid = new Random().nextBoolean();
    }

    @Test
    void mapToWalletValidation() {
        //given
        WalletValidationHttpResponse walletValidationHttpResponse = new WalletValidationHttpResponse(valid, 0, message);

        //when
        WalletValidation actual = unit.mapToWalletValidation(walletValidationHttpResponse);

        //then
        assertEquals(valid, actual.isValid());
        assertEquals(message, actual.getMessage());
    }
}