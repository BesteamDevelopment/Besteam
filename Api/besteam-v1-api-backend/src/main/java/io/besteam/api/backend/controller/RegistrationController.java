package io.besteam.api.backend.controller;

import io.besteam.api.backend.dto.RegistrationResponseDto;
import io.besteam.api.backend.dto.UserRegistrationDto;
import io.besteam.api.backend.dto.WalletDto;
import io.besteam.api.backend.dto.avatar.AvatarDto;
import io.besteam.api.backend.excepton.UserValidationException;
import io.besteam.api.backend.model.User;
import io.besteam.api.backend.model.enums.RegistrationState;
import io.besteam.api.backend.security.JwtTokenProvider;
import io.besteam.api.backend.security.JwtTokenValidator;
import io.besteam.api.backend.service.RegistrationService;
import io.besteam.api.backend.service.UserValidator;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@Tag(name = "Registration API", description = "API to register new users.")
@RestController
@RequestMapping("api/registration")
@RequiredArgsConstructor
public class RegistrationController {

    private final RegistrationService registrationService;
    private final JwtTokenProvider jwtTokenProvider;
    private final JwtTokenValidator jwtTokenValidator;
    private final UserValidator userValidator;

    @Operation(summary = "Create new users", description = "API to create new users with wallet.")
    @PostMapping("/wallet")
    public ResponseEntity<RegistrationResponseDto> registerWallet(@Valid @RequestBody WalletDto walletDto) {
        //todo qui va fatto il controllo del wallet
        try {
            userValidator.validateWalletRegistration(walletDto);
        } catch (UserValidationException e) {
            return ResponseEntity.badRequest().build();
        }

        //todo validate password


        User user = registrationService.registerWalletAndGenerateToken(walletDto);
        String token = jwtTokenProvider.generateToken(user);

        RegistrationResponseDto response = new RegistrationResponseDto(token, user.getRegistrationState().toString(), user.getId().toString());
        return ResponseEntity.ok(response);
    }

    @Operation(summary = "Add information to user", description = "API add personal information to a wallet-user.")
    @SecurityRequirement(name = "bearerAuth")
    @PostMapping("/basic-info/{userId}")
    public ResponseEntity<RegistrationResponseDto> updateBasicInfo(@RequestHeader("Authorization") String authHeader,
                                                                   @RequestBody UserRegistrationDto userRegistrationDto,
                                                                   @PathVariable UUID userId) {

        boolean tokenValid = jwtTokenValidator.isTokenValidWithState(authHeader, RegistrationState.WALLET_INSERTED, userId);
        if (!tokenValid) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        userValidator.validateUserCreation(userRegistrationDto);

        User updatedUser = registrationService.updateBasicInfo(userId, userRegistrationDto);
        String updatedToken = jwtTokenProvider.generateToken(updatedUser);

        return ResponseEntity.ok(new RegistrationResponseDto(updatedToken, updatedUser.getRegistrationState().toString(),
                updatedUser.getId().toString()));
    }

    @SecurityRequirement(name = "bearerAuth")
    @PostMapping("/avatar")
    public ResponseEntity<RegistrationResponseDto> createAvatar(@RequestHeader("Authorization") String authHeader, @RequestBody AvatarDto avatarDto){
        if(!jwtTokenValidator.isTokenValidAndLoggedIn(authHeader)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        String token = authHeader.substring(7);
        String regState = jwtTokenValidator.getClaimsFromToken(token).get("registrationState", String.class);
        if(!"BASIC_INFO_INSERTED".equals(regState)){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }
        RegistrationResponseDto response = registrationService.createAvatarAndAdvanceState(token, avatarDto);
        return ResponseEntity.ok(response);
    }
}
