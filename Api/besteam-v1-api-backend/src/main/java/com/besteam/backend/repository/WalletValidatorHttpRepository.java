package com.besteam.backend.repository;

import com.besteam.backend.dto.WalletValidationHttpRequest;
import com.besteam.backend.dto.WalletValidationHttpResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Repository;
import org.springframework.web.client.RestTemplate;

@Repository
@Slf4j
public class WalletValidatorHttpRepository {

    //for now, until we don't have another solution, I'm using https://checkcryptoaddress.com/

    private static final String X_API_KEY = "X-Api-Key";

    private final RestTemplate restTemplate;
    private final String checkCryptoAddressApiKey;
    private final String checkCryptoAddressApiUrl;

    public WalletValidatorHttpRepository(RestTemplate restTemplate, @Value("${check.crypto.address.api-key}") String checkCryptoAddressApiKey,
                                         @Value("${check.crypto.address.api-url}") String checkCryptoAddressApiUrl) {
        this.restTemplate = restTemplate;
        this.checkCryptoAddressApiKey = checkCryptoAddressApiKey;
        this.checkCryptoAddressApiUrl = checkCryptoAddressApiUrl;
    }

    public WalletValidationHttpResponse validateAddress(String walletAddress) {
        HttpHeaders headers = new HttpHeaders();
        headers.add(X_API_KEY, checkCryptoAddressApiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<WalletValidationHttpRequest> request = new HttpEntity<>(new WalletValidationHttpRequest(walletAddress, "eth"), headers);
        try {
            return restTemplate.postForObject(checkCryptoAddressApiUrl, request, WalletValidationHttpResponse.class);
        } catch (Exception e) {
            log.error("Error validating user wallet with checkcryptoaddress. Exception {}", e, e);
            return new WalletValidationHttpResponse(false, 0, "We had some issues while checking your wallet.");
        }
    }
}
