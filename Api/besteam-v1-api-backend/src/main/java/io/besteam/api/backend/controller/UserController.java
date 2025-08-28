package io.besteam.api.backend.controller;

import io.besteam.api.backend.dto.UserDto;
import io.besteam.api.backend.dto.UserModificationDto;
import io.besteam.api.backend.dto.UserModificationResponse;
import io.besteam.api.backend.dto.UserValidation;
import io.besteam.api.backend.mapper.UserMapper;
import io.besteam.api.backend.model.User;
import io.besteam.api.backend.security.JwtTokenValidator;
import io.besteam.api.backend.service.UserService;
import io.besteam.api.backend.service.UserValidator;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@Tag(name = "User APIs", description = "Read, Update and Deactivate user API.")
@RestController
@RequiredArgsConstructor
@RequestMapping("api/users/")
public class UserController {

    //todo test all methods
    private final UserValidator userValidator;
    private final UserMapper userMapper;
    private final UserService userService;
    private final JwtTokenValidator jwtTokenValidator;

    @Operation(summary = "Get user", description = "API to retrieve a user in the system by their ID. Requires login token.")
    @GetMapping("{userId}")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<UserDto> getUser(@RequestHeader("Authorization") String authHeader, @PathVariable UUID userId) {
        boolean tokenValid = jwtTokenValidator.isTokenValidForUserLogin(authHeader, userId);
        if (!tokenValid) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Optional<User> userOpt = userService.getUserById(userId);

        return userOpt.map(user -> ResponseEntity.ok(userMapper.toDto(user))).orElse(ResponseEntity.notFound().build());
    }

    @Operation(summary = "Get all users", description = "API to retrieve all users in the system. Requires login token.")
    @GetMapping("")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<List<UserDto>> getAllUsers(@RequestHeader("Authorization") String authHeader) {
        boolean tokenValid = jwtTokenValidator.isTokenValidAndLoggedIn(authHeader);
        if (!tokenValid) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        List<User> users = userService.getAllUsers();

        return ResponseEntity.ok().body(userMapper.mapToUserDtos(users));
    }

    @Operation(summary = "Update user", description = "API to update an existing user. Requires login token.")
    @PutMapping("{userId}")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<UserModificationResponse> updateUser(@RequestHeader("Authorization") String authHeader,
                                                               @PathVariable UUID userId,
                                                               @RequestBody UserModificationDto userModificationDto) {

        boolean tokenValid = jwtTokenValidator.isTokenValidForUserLogin(authHeader, userId);
        if (!tokenValid) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        Optional<User> userOpt = userService.getUserById(userId);

        if (userOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        UserValidation userValidation = userValidator.validateUserUpdate(userModificationDto);
        if (!userValidation.isValid()) {
            return ResponseEntity.badRequest().body(userMapper.mapToUserCreationResponse(userValidation));
        }

        User hydratedUser = userService.hydrateUser(userOpt.get(), userModificationDto);
        User savedUser = userService.save(hydratedUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(userMapper.mapToUserCreationResponse(savedUser));
    }

    @Operation(summary = "Disable user", description = "API to disable an existing user. Requires login token.")
    @DeleteMapping("{userId}")
    @SecurityRequirement(name = "bearerAuth")
    public ResponseEntity<UserModificationResponse> deactivateUser(@RequestHeader("Authorization") String authHeader,
                                                                   @PathVariable UUID userId) {
        boolean tokenValid = jwtTokenValidator.isTokenValidForUserLogin(authHeader, userId);
        if (!tokenValid) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        return userService.deactivateUser(userId)
                .map(user -> ResponseEntity.ok(userMapper.mapToUserCreationResponse(user)))
                .orElse(ResponseEntity.notFound().build());
    }
}