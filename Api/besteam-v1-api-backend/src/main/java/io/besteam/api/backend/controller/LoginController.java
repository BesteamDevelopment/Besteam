package io.besteam.api.backend.controller;

import io.besteam.api.backend.dto.LoginRequestDto;
import io.besteam.api.backend.dto.RegistrationResponseDto;
import io.besteam.api.backend.model.User;
import io.besteam.api.backend.security.JwtTokenProvider;
import io.besteam.api.backend.service.UserService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.RequiredArgsConstructor;

import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@Tag(name = "Login APIs", description = "APIs to login and logout users.")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class LoginController {

    private final UserService userService;
    private final JwtTokenProvider jwtTokenProvider;

    @Operation(summary = "Login user", description = "API to login user and get auth token.")
    @PostMapping("login/{userId}")
    public ResponseEntity<RegistrationResponseDto> getUser(@PathVariable UUID userId, @RequestBody LoginRequestDto loginRequestDto) {
        Optional<User> optUser = userService.getUserById(userId);

        if (optUser.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        User user = optUser.get();
//        if (!StringUtils.equals(user.getPassword(), loginRequestDto.getPassword())) {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
//        }
        System.out.println("Ciao");
        String token = jwtTokenProvider.generateLoginToken(user);

        return ResponseEntity.ok(new RegistrationResponseDto(token, user.getRegistrationState().toString(), userId.toString()));
    }
}
