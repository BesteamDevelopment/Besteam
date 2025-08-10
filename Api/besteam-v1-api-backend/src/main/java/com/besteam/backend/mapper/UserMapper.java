package com.besteam.backend.mapper;

import com.besteam.backend.dto.*;
import com.besteam.backend.model.User;
import com.besteam.backend.model.enums.GameRole;
import com.besteam.backend.model.enums.RegistrationState;
import com.besteam.backend.model.enums.Role;
import com.besteam.backend.util.DateUtil;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Component
public class UserMapper {

    private static final BigDecimal ZERO_BIGDECIMAL = new BigDecimal("0.00");

    public UserDto toDto(User user) {
        if (user == null) return null;
        UserDto dto = new UserDto();
        dto.setId(user.getId().toString());
        dto.setWalletCode(user.getWalletCode());
        dto.setEmail(user.getEmail());
        dto.setNickname(user.getNickname());
        dto.setCheckNewsletter(user.isAcceptedNewsletter());
        dto.setNationality(user.getNationality());
        dto.setPlayerLocation(user.getPlayerLocation());
        dto.setDateOfBirth(user.getDateOfBirth());
        dto.setGender(user.getGender());
        dto.setFavouriteRole(Optional.ofNullable(user.getFavouriteRole()).map(GameRole::getName).orElse(null));
        dto.setEnabled(user.isEnabled());
        dto.setVerified(user.isVerified());
        dto.setGameWallet(user.getGameWallet());
        dto.setActualRole(Optional.ofNullable(user.getActualRole()).map(Role::getName).orElse(null));
        dto.setAvatarId(user.getAvatarId());
        dto.setCreatedAt(user.getCreatedAt());
        dto.setRegistrationState(Optional.ofNullable(user.getRegistrationState()).map(Enum::toString).orElse(null));

        return dto;
    }

    public User fromRegistrationDto(UserRegistrationDto dto) {
        User user = new User();
        user.setEmail(dto.getEmail());
        user.setNickname(dto.getNickname());
        user.setNationality(dto.getNationality());
        user.setPlayerLocation(dto.getPlayerLocation());
        user.setDateOfBirth(DateUtil.stringToLocalDate(dto.getDateOfBirth()));
        user.setGender(dto.getGender());
        user.setFavouriteRole(GameRole.fromName(dto.getFavouriteRole()));
        user.setAcceptedNewsletter(dto.isAcceptedNewsletter());
        user.setAcceptedPrivacy(dto.isAcceptedPrivacy());
        // Impostazioni di default gestite dal backend
        user.setEnabled(true);
        user.setVerified(false);
        user.setAvatarId(null);
        user.setGameWallet(ZERO_BIGDECIMAL);
        return user;
    }

    public User fromWalletDto(WalletDto dto) {
        if (dto == null) return null;
        User user = new User();
        user.setWalletCode(dto.getWalletCode());
        // Impostiamo lo stato iniziale a WALLET_INSERTED
        user.setRegistrationState(RegistrationState.WALLET_INSERTED);
        // Gli altri campi possono essere null o impostati con default
        user.setEnabled(true);
        user.setVerified(false);
        user.setActualRole(Role.FREE_AGENT);
        user.setGameWallet(ZERO_BIGDECIMAL);
        //user.setPassword(dto.getPassword()); //todo encrypt
        return user;
    }

    public UserModificationResponse mapToUserCreationResponse(UserValidation userValidation) {
        //here we need to set messages and error (and leave the dto as null) in case the creation was not successful
        return new UserModificationResponse(userValidation.getMessage());
    }

    public UserModificationResponse mapToUserCreationResponse(User user) {
        return new UserModificationResponse(toDto(user), "The user has been created/updated in our DB.");
    }

    public List<UserDto> mapToUserDtos(List<User> users) {
        return users.stream().map(this::toDto).toList();
    }
}
