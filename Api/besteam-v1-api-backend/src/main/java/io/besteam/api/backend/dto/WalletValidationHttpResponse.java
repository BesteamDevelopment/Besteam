package io.besteam.api.backend.dto;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Getter
public class WalletValidationHttpResponse {

    private final boolean valid;
    private final int scamReport;
    private final String message;
}
