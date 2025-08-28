package io.besteam.api.backend.service;

import io.besteam.api.backend.dto.UserModificationDto;
import io.besteam.api.backend.excepton.UserNotFoundException;
import io.besteam.api.backend.model.User;
import io.besteam.api.backend.model.enums.GameRole;
import io.besteam.api.backend.model.enums.Role;
import io.besteam.api.backend.repository.UserRepository;
import io.besteam.api.backend.util.DateUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(UUID userId) {
        return userRepository.findById(userId);
    }

    public User save(User user) {
        return userRepository.save(user);
    }

    public Optional<User> deactivateUser(UUID userId) {
        Optional<User> userOpt = getUserById(userId);

        if (userOpt.isPresent()) {
            userOpt.get().setEnabled(false);
            return Optional.of(save(userOpt.get()));
        }
        return Optional.empty();
    }

    public User hydrateUser(User user, UserModificationDto userModificationDto) {
        Optional.ofNullable(userModificationDto.getGameWallet()).ifPresent(user::setGameWallet);
        Optional.ofNullable(userModificationDto.getNickname()).ifPresent(user::setNickname);
        Optional.ofNullable(userModificationDto.getNationality()).ifPresent(user::setNationality);
        Optional.ofNullable(userModificationDto.getPlayerLocation()).ifPresent(user::setPlayerLocation);
        Optional.ofNullable(userModificationDto.getDateOfBirth()).ifPresent(dateOfBirth -> user.setDateOfBirth(DateUtil.stringToLocalDate(dateOfBirth)));
        Optional.ofNullable(userModificationDto.getGender()).ifPresent(user::setGender);
        Optional.ofNullable(userModificationDto.getFavouriteRole()).ifPresent(role -> user.setFavouriteRole(GameRole.fromName(role)));
        Optional.ofNullable(userModificationDto.getActualRole()).ifPresent(role -> user.setActualRole(Role.fromName(role)));
        Optional.ofNullable(userModificationDto.getAcceptedNewsletter()).ifPresent(user::setAcceptedNewsletter);
        Optional.ofNullable(userModificationDto.getAcceptedPrivacy()).ifPresent(user::setAcceptedPrivacy);
        Optional.ofNullable(userModificationDto.getEnabled()).ifPresent(user::setEnabled);
        Optional.ofNullable(userModificationDto.getPaymentVerified()).ifPresent(user::setVerified);

        return user;
    }

    public String getAvatarId(String walletCode) {
        Optional<User> user = userRepository.findByWalletCode(walletCode);
        if (user.isEmpty()) {
            throw new UserNotFoundException("User not found for wallet: " + walletCode);
        }
        return user.get().getAvatarId();
    }
}