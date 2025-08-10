package com.besteam.backend.security;

import com.besteam.backend.model.enums.RegistrationState;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
public class JwtTokenValidator {

    public boolean isTokenValidWithState(String authHeader, RegistrationState requiredRegistrationState, UUID userId) {
        //we remove the "Bearer "
        String token = authHeader.substring(7);
        if (isTokenExpired(token)) {
            return false;
        }
        Claims claims = getClaimsFromToken(token);
        String userIdFromToken = claims.get("userId", String.class);
        if (!userIdFromToken.equals(userId.toString())) {
            return false;
        }
        boolean userEnabled = claims.get("userEnabled", Boolean.class);
        if (!userEnabled) {
            return false;
        }

        String regState = claims.get("registrationState", String.class);
        return requiredRegistrationState.toString().equals(regState);
    }

    public boolean isTokenValidForUserLogin(String authHeader, UUID userId) {
        //we remove the "Bearer " string from the token
        String token = authHeader.substring(7);
        if (isTokenExpired(token)) {
            return false;
        }

        Claims claims = getClaimsFromToken(token);
        String userIdFromToken = claims.get("userId", String.class);
        if (!userIdFromToken.equals(userId.toString())) {
            return false;
        }
        boolean userEnabled = claims.get("userEnabled", Boolean.class);
        if(!userEnabled) {
            return false;
        }

        boolean loginEnabled = claims.get("login", Boolean.class);
        if(!loginEnabled) {
            return false;
        }

        return true;
    }

    public boolean isTokenValidAndLoggedIn(String authHeader) {
        //we remove the "Bearer "
        String token = authHeader.substring(7);
        if (isTokenExpired(token)) {
            return false;
        }

        Claims claims = getClaimsFromToken(token);
        boolean userEnabled = claims.get("userEnabled", Boolean.class);
        if(!userEnabled) {
            return false;
        }

//        boolean loginEnabled = claims.get("login", Boolean.class);
//        if(!loginEnabled) {
//            return false;
//        }

        return true;
    }


    private boolean isTokenExpired(String token) {
        Claims claims = getClaimsFromToken(token);
        return claims.getExpiration().before(new Date());
    }

    public Claims getClaimsFromToken(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(JwtTokenProvider.KEY)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }
}
