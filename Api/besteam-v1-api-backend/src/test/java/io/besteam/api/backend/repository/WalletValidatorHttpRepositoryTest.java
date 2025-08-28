package io.besteam.api.backend.repository;

import io.besteam.api.backend.dto.WalletValidationHttpResponse;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpEntity;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import java.util.Random;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class WalletValidatorHttpRepositoryTest {

    private WalletValidatorHttpRepository unit;

    @Mock
    private RestTemplate restTemplateMock;

    private String checkCryptoAddressApiKey, checkCryptoAddressApiUrl, walletAddress;
    private int scamReport;
    private boolean valid;

    @BeforeEach
    void setUp() {
        walletAddress = RandomStringUtils.randomAlphanumeric(20);
        checkCryptoAddressApiKey = RandomStringUtils.randomAlphanumeric(20);
        checkCryptoAddressApiUrl = RandomStringUtils.randomAlphanumeric(20);
        scamReport = new Random().nextInt();
        valid = new Random().nextBoolean();

        unit = new WalletValidatorHttpRepository(restTemplateMock, checkCryptoAddressApiKey, checkCryptoAddressApiUrl);
    }

    @Test
    void validateAddress() {
        //given
        WalletValidationHttpResponse walletValidationHttpResponse = new WalletValidationHttpResponse(valid, scamReport, null);
        when(restTemplateMock.postForObject(eq(checkCryptoAddressApiUrl), any(HttpEntity.class), eq(WalletValidationHttpResponse.class)))
                .thenReturn(walletValidationHttpResponse);

        //when
        WalletValidationHttpResponse actual = unit.validateAddress(walletAddress);

        //then
        assertEquals(valid, actual.isValid());
        assertNull(actual.getMessage());
        assertEquals(scamReport, actual.getScamReport());
    }

    @Test
    void validateAddress_exception() {
        //given
        when(restTemplateMock.postForObject(eq(checkCryptoAddressApiUrl), any(HttpEntity.class), eq(WalletValidationHttpResponse.class)))
                .thenThrow(RestClientException.class);

        //when
        WalletValidationHttpResponse actual = unit.validateAddress(walletAddress);

        //then
        assertFalse(actual.isValid());
        assertEquals("We had some issues while checking your wallet.", actual.getMessage());
        assertEquals(0, actual.getScamReport());
    }
}