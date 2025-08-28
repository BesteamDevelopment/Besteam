package io.besteam.api.backend.service;

import io.besteam.api.backend.dto.*;
import io.besteam.api.backend.excepton.UserValidationException;
import io.besteam.api.backend.model.enums.GameRole;
import io.besteam.api.backend.repository.UserRepository;
import io.besteam.api.backend.util.DateUtil;

import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;

import org.springframework.stereotype.Component;

import javax.mail.internet.InternetAddress;
import java.math.BigDecimal;
import java.time.format.DateTimeParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class UserValidator {

    private static final String NICKNAME_FIELD = "nickname";

    private final UserRepository userRepository;

    //todo test
    public void validateWalletRegistration(WalletDto walletDto) {
        List<FieldError> errors = new ArrayList<>();
        String walletCode = walletDto.getWalletCode();
        if (StringUtils.isEmpty(walletCode)) {
            errors.add(new FieldError("wallet_code", "The field 'wallet_code' can't be empty."));
        }
        if (userRepository.findByWalletCode(walletCode).isPresent()) {
            errors.add(new FieldError("wallet_code", "The wallet_code you provided is already in use in our system."));
        }

        if (!errors.isEmpty()) {
            throw new UserValidationException(errors);
        }
    }

    public void validateUserCreation(UserRegistrationDto userRegistrationDto) {
        List<FieldError> errors = new ArrayList<>();
        String nickname = userRegistrationDto.getNickname();
        if (StringUtils.length(nickname) < 3) {
            errors.add(new FieldError(NICKNAME_FIELD, "The field 'nickname' is too short: minimum 3 characters."));
        }
        if (StringUtils.length(nickname) > 16) {
            errors.add(new FieldError(NICKNAME_FIELD, "The field 'nickname' is too long: maximum 16 characters."));
        }

        String lettersInNickname = nickname.replaceAll("[^a-zA-Z]+", "");
        if (StringUtils.length(lettersInNickname) < 3) {
            errors.add(new FieldError(NICKNAME_FIELD, "The field 'nickname' should contain at least 3 letters."));
        }

        String digitsInNickname = nickname.replaceAll("[^0-9]", "");
        if (StringUtils.length(digitsInNickname) > 4) {
            errors.add(new FieldError(NICKNAME_FIELD, "The field 'nickname' should contain no more than 4 digits."));
        }

        String specialCharactersNotAllowedInNickname = nickname.replaceAll("\\w", "").replaceAll("-", "");
        if (StringUtils.length(specialCharactersNotAllowedInNickname) > 0) {
            errors.add(new FieldError(NICKNAME_FIELD, "The field 'nickname' should contain just these special characters ['-']."));
        }
        if (userRepository.findByNickname(nickname).isPresent()) {
            errors.add(new FieldError(NICKNAME_FIELD, "The nickname you choose is already in use in our system."));
        }

        String email = userRegistrationDto.getEmail();
        if (StringUtils.isEmpty(email)) {
            errors.add(new FieldError("email", "The field 'email' can't be empty."));
        }
        if (!userRepository.findByEmail(userRegistrationDto.getEmail()).isEmpty()) {
            errors.add(new FieldError("email", "The email you provided is already registered in our system."));
        }

        try {
            InternetAddress emailAddress = new InternetAddress(email);
            emailAddress.validate();
        } catch (Exception ex) {
            errors.add(new FieldError("email", "The field 'email' should be a legal email address."));
        }

        if (StringUtils.isEmpty(userRegistrationDto.getNationality())) {
            errors.add(new FieldError("nationality", "The field 'nationality' can't be empty."));
        }

        if (StringUtils.isEmpty(userRegistrationDto.getPlayerLocation())) {
            errors.add(new FieldError("player_location", "The field 'player_location' can't be empty."));
        }

        String birthDate = userRegistrationDto.getDateOfBirth();
        if (StringUtils.isEmpty(birthDate)) {
            errors.add(new FieldError("date_of_birth", "The field 'date_of_birth' can't be empty."));
        }
        try {
            DateUtil.stringToLocalDate(birthDate);
        } catch (Exception ex) {
            errors.add(new FieldError("date_of_birth", "The field 'date_of_birth' should be in the 'DD-MM-YYYY' format."));
        }

        if (StringUtils.isEmpty(userRegistrationDto.getGender())) {
            errors.add(new FieldError("gender", "The field 'gender' can't be empty."));
        }

        String favouriteRole = userRegistrationDto.getFavouriteRole();
        if (StringUtils.isEmpty(favouriteRole)) {
            errors.add(new FieldError("favourite_role", "The field 'favourite_role' can't be empty."));
        }
        if (Arrays.stream(GameRole.values()).map(GameRole::getName).noneMatch(value -> value.equals(favouriteRole))) {
            errors.add(new FieldError("favourite_role", "The field 'favourite_role' value should be one one of " + GameRole.getAllGameRoles() + "."));
        }

        if (!userRegistrationDto.isAcceptedPrivacy()) {
            errors.add(new FieldError("accepted_privacy", "The field 'accepted_privacy' can't be false."));
        }

        if (!errors.isEmpty()) {
            throw new UserValidationException(errors);
        }
    }

    public UserValidation validateUserUpdate(UserModificationDto userModificationDto) {

        if (userModificationDto.getGameWallet() != null && userModificationDto.getGameWallet().compareTo(BigDecimal.ZERO) < 0) {
            return new UserValidation("game_wallet", "The field 'game_wallet' can't be negative.");
        }

        String nickname = userModificationDto.getNickname();
        if (nickname != null) {
            if (StringUtils.length(nickname) < 3) {
                return new UserValidation(NICKNAME_FIELD, "The field 'nickname' is too short: minimum 3 characters.");
            }
            if (StringUtils.length(nickname) > 16) {
                return new UserValidation(NICKNAME_FIELD, "The field 'nickname' is too long: maximum 16 characters.");
            }

            if (StringUtils.length(nickname.replaceAll("[^a-zA-Z]+", "")) < 3) {
                return new UserValidation(NICKNAME_FIELD, "The field 'nickname' should contain at least 3 letters.");
            }

            if (StringUtils.length(nickname.replaceAll("[^0-9]", "")) > 4) {
                return new UserValidation(NICKNAME_FIELD, "The field 'nickname' should contain no more than 4 digits.");
            }

            String specialCharactersNotAllowedInNickname = nickname.replaceAll("\\w", "").replaceAll("-", "");
            if (StringUtils.length(specialCharactersNotAllowedInNickname) > 0) {
                return new UserValidation(NICKNAME_FIELD, "The field 'nickname' should contain just these special characters ['-'].");
            }
            if (!userRepository.findByNickname(nickname).isEmpty()) {
                return new UserValidation(NICKNAME_FIELD, "The nickname you choose is already in use in our system.");
            }
        }

        if (userModificationDto.getDateOfBirth() != null) {
            try {
                DateUtil.stringToLocalDate(userModificationDto.getDateOfBirth());
            } catch (DateTimeParseException ex) {
                return new UserValidation("date_of_birth", "The field 'date_of_birth' should be in the 'DD-MM-YYYY' format.");
            }
        }

        if (userModificationDto.getFavouriteRole() != null && Arrays.stream(GameRole.values()).map(GameRole::getName).noneMatch(value -> value.equals(userModificationDto.getFavouriteRole()))) {
            return new UserValidation("favourite_role", "The field 'favourite_role' value should be one one of " + GameRole.getAllGameRoles() + ".");
        }

        return new UserValidation();
    }
}