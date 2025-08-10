package com.besteam.backend.service;

import com.besteam.backend.dto.RegistrationResponseDto;
import com.besteam.backend.dto.UserRegistrationDto;
import com.besteam.backend.dto.WalletDto;
import com.besteam.backend.dto.avatar.AvatarDto;
import com.besteam.backend.excepton.UserNotFoundException;
import com.besteam.backend.mapper.AvatarMapper;
import com.besteam.backend.mapper.UserMapper;
import com.besteam.backend.model.User;
import com.besteam.backend.model.avatar.Avatar;
import com.besteam.backend.model.enums.RegistrationState;
import com.besteam.backend.repository.AvatarRepository;
import com.besteam.backend.repository.UserRepository;
import com.besteam.backend.security.JwtTokenProvider;
import com.besteam.backend.security.JwtTokenValidator;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.UUID;

@Service
public class RegistrationService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final UserValidator userValidator;
    private final AvatarRepository avatarRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final JwtTokenValidator jwtTokenValidator;
    private final AvatarMapper avatarMapper;

    public RegistrationService(UserRepository userRepository, UserMapper userMapper, UserValidator userValidator, AvatarRepository avatarRepository, JwtTokenProvider jwtTokenProvider, JwtTokenValidator jwtTokenValidator, AvatarMapper avatarMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.userValidator = userValidator;
        this.avatarRepository = avatarRepository;
        this.jwtTokenProvider = jwtTokenProvider;
        this.jwtTokenValidator = jwtTokenValidator;
        this.avatarMapper = avatarMapper;
    }

    @Transactional
    public User registerWalletAndGenerateToken(WalletDto walletDto) {
        Optional<User> optionalUser = userRepository.findByWalletCode(walletDto.getWalletCode());
        User user;
        if (optionalUser.isPresent()) {
            user = optionalUser.get();
        } else {
            user = userMapper.fromWalletDto(walletDto);
            user = userRepository.save(user);
        }

        return user;
    }

    @Transactional
    public User updateBasicInfo(UUID userId, UserRegistrationDto userRegistrationDto) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isEmpty()) {
            throw new UserNotFoundException("User not found for userId: " + userId);
        }

        User user = userMapper.fromRegistrationDto(userRegistrationDto);
        user.setId(optionalUser.get().getId());
        user.setEnabled(optionalUser.get().isEnabled());
        user.setWalletCode(optionalUser.get().getWalletCode());
        user.setVerified(optionalUser.get().isVerified());
        user.setCreatedAt(optionalUser.get().getCreatedAt());
        user.setGameWallet(optionalUser.get().getGameWallet());
        user.setActualRole(optionalUser.get().getActualRole());
        user.setRegistrationState(RegistrationState.BASIC_INFO_INSERTED);
        user = userRepository.save(user);

        return user;
    }

    public RegistrationResponseDto createAvatarAndAdvanceState(String token, AvatarDto dto) {
        String walletCode = jwtTokenValidator.getClaimsFromToken(token).get("walletCode", String.class);
        Avatar avatar = avatarRepository.save(avatarMapper.toModel(dto));
        // aggiorna l’utente SQL: set avatarId + registrationState = AVATAR_CREATED
        User user = userRepository.findByWalletCode(walletCode)
                .orElseThrow(EntityNotFoundException::new);
        user.setAvatarId(avatar.getId());
        user.setRegistrationState(RegistrationState.AVATAR_CREATED);
        userRepository.save(user);
        String newToken = jwtTokenProvider.generateToken(user);
       return new RegistrationResponseDto(newToken,user.getRegistrationState().name(), user.getId().toString());
    }
}
