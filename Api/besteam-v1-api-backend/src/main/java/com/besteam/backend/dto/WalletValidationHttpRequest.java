package com.besteam.backend.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class WalletValidationHttpRequest {

    private final String address;
    private final String network;
}
