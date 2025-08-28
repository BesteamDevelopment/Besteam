package io.besteam.api.backend.controller;

import io.besteam.api.backend.dto.avatar.AvatarDto;
import io.besteam.api.backend.excepton.UserNotFoundException;
import io.besteam.api.backend.security.JwtTokenValidator;
import io.besteam.api.backend.service.AvatarService;
import io.besteam.api.backend.service.UserService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/avatar")
@RequiredArgsConstructor
public class AvatarController {

    private final JwtTokenValidator jwtTokenValidator;
    private final UserService userService;
    private final AvatarService avatarService;


    @GetMapping("/me")
    public ResponseEntity<AvatarDto> getMyAvatar(@RequestHeader("Authorization") String authHeader){
        if(!jwtTokenValidator.isTokenValidAndLoggedIn(authHeader)){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
        String token = authHeader.substring(7);
        String walletCode = jwtTokenValidator.getClaimsFromToken(token).get("walletCode", String.class);
        String avatarId = userService.getAvatarId(walletCode);
        AvatarDto avatarDto = avatarService.findById(avatarId).orElseThrow(() -> new UserNotFoundException("Avatar non trovato"));
        return ResponseEntity.ok(avatarDto);

    }
}
