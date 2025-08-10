package com.besteam.backend.model;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public class WalletValidation {

    private final boolean valid;
    private final String message;

}
