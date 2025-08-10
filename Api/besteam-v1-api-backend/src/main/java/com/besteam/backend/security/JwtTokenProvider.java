package com.besteam.backend.security;

import com.besteam.backend.model.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JwtTokenProvider {

    public static final SecretKey KEY = Keys.secretKeyFor(SignatureAlgorithm.HS512);

    @Value("${app.jwtExpirationInMs}")
    private int jwtExpirationInMs;

    public String generateToken(User user) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);
        return Jwts.builder()
                .setSubject(user.getWalletCode())
                .claim("registrationState", user.getRegistrationState().toString())
                .claim("walletCode", user.getWalletCode())
                .claim("userId", user.getId())
                .claim("userEnabled", user.isEnabled())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(KEY, SignatureAlgorithm.HS512)
                .compact();
    }

    public String generateLoginToken(User user) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + jwtExpirationInMs);
        return Jwts.builder()
                .setSubject(user.getWalletCode())
                .claim("registrationState", user.getRegistrationState().toString())
                .claim("walletCode", user.getWalletCode())
                .claim("userId", user.getId())
                .claim("userEnabled", user.isEnabled())
                .claim("login", true)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(KEY, SignatureAlgorithm.HS512)
                .compact();
    }
}
