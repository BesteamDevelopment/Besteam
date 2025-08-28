package io.besteam.api.backend.mapper;

import io.besteam.api.backend.dto.*;
import io.besteam.api.backend.model.User;
import io.besteam.api.backend.model.enums.GameRole;
import io.besteam.api.backend.model.enums.RegistrationState;
import io.besteam.api.backend.model.enums.Role;
import org.apache.commons.lang3.RandomStringUtils;
import org.assertj.core.util.Lists;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;

class UserMapperTest {

    private UserMapper unit;

    private String field, message, walletCode, email, nickname, nationality, gender, avatarId, playerLocation; //password;
    private UUID id;
    private BigDecimal gameWallet;
    private RegistrationState registrationState;
    private LocalDate dateOfBirth;
    private Instant createdAt;
    private Role actualRole;
    private GameRole gameRole;

    @BeforeEach
    void setUp() {
        unit = new UserMapper();

        field = RandomStringUtils.randomAlphanumeric(20);
        message = RandomStringUtils.randomAlphanumeric(20);
        walletCode = RandomStringUtils.randomAlphanumeric(20);
        email = RandomStringUtils.randomAlphanumeric(20);
        nickname = RandomStringUtils.randomAlphanumeric(20);
        nationality = RandomStringUtils.randomAlphanumeric(20);
        gender = RandomStringUtils.randomAlphanumeric(20);
        avatarId = RandomStringUtils.randomAlphanumeric(20);
        playerLocation = RandomStringUtils.randomAlphanumeric(20);
        //password = RandomStringUtils.randomAlphanumeric(20);

        id = UUID.randomUUID();
        dateOfBirth = LocalDate.of(2025, 1, 1);
        gameWallet = new BigDecimal("10.13");
        createdAt = Instant.now();
        actualRole = Role.FREE_AGENT;
        gameRole = GameRole.CENTRAL_DEFENDER;
        registrationState = RegistrationState.BASIC_INFO_INSERTED;
    }

    @DisplayName("mapToUserCreationResponse should return the message in case user validation if invalid")
    @Test
    void mapToUserCreationResponse_error_in_validation() {
        //given

        UserValidation userValidation = new UserValidation(field, message);

        //when
        UserModificationResponse actual = unit.mapToUserCreationResponse(userValidation);

        //then
        assertNull(actual.getUser());
        assertEquals(message, actual.getMessage());
        assertNull(actual.getError());
    }

    @DisplayName("toDto should should return a UserDto")
    @Test
    void toDto() {
        //given
        User user = getTestUser();

        //when
        UserDto actual = unit.toDto(user);

        //then
        assertEquals(id.toString(), actual.getId());
        assertEquals(walletCode, actual.getWalletCode());
        assertEquals(email, actual.getEmail());
        assertEquals(nickname, actual.getNickname());
        assertTrue(actual.isCheckNewsletter());
        assertEquals(nationality, actual.getNationality());
        assertEquals(playerLocation, actual.getPlayerLocation());
        assertEquals(dateOfBirth, actual.getDateOfBirth());
        assertEquals(gender, actual.getGender());
        assertEquals(gameRole.getName(), actual.getFavouriteRole());
        assertTrue(actual.isEnabled());
        assertTrue(actual.isVerified());
        assertEquals(createdAt, actual.getCreatedAt());
        assertEquals(gameWallet, actual.getGameWallet());
        assertEquals(actualRole.getName(), actual.getActualRole());
        assertEquals(avatarId, actual.getAvatarId());
        assertEquals(registrationState.name(), actual.getRegistrationState());
    }

    @DisplayName("toDto should should return a UserModificationResponse")
    @Test
    void mapToUserCreationResponse() {
        //given
        UserValidation userValidation = new UserValidation(field, message);

        //when
        UserModificationResponse actual = unit.mapToUserCreationResponse(userValidation);

        //then
        assertEquals(message, actual.getMessage());
        assertNull(actual.getError());
        assertNull(actual.getUser());
    }

    @DisplayName("toDto should should return a UserModificationResponse (user)")
    @Test
    void mapToUserCreationResponse_user() {
        //given
        User user = getTestUser();


        //when
        UserModificationResponse actual = unit.mapToUserCreationResponse(user);

        //then
        assertEquals("The user has been created/updated in our DB.", actual.getMessage());
        assertNull(actual.getError());

        assertEquals(id.toString(), actual.getUser().getId());
        assertEquals(walletCode, actual.getUser().getWalletCode());
        assertEquals(email, actual.getUser().getEmail());
        assertEquals(nickname, actual.getUser().getNickname());
        assertTrue(actual.getUser().isCheckNewsletter());
        assertEquals(nationality, actual.getUser().getNationality());
        assertEquals(playerLocation, actual.getUser().getPlayerLocation());
        assertEquals(dateOfBirth, actual.getUser().getDateOfBirth());
        assertEquals(gender, actual.getUser().getGender());
        assertEquals(gameRole.getName(), actual.getUser().getFavouriteRole());
        assertTrue(actual.getUser().isEnabled());
        assertTrue(actual.getUser().isVerified());
        assertEquals(createdAt, actual.getUser().getCreatedAt());
        assertEquals(gameWallet, actual.getUser().getGameWallet());
        assertEquals(actualRole.getName(), actual.getUser().getActualRole());
        assertEquals(avatarId, actual.getUser().getAvatarId());
        assertEquals(registrationState.name(), actual.getUser().getRegistrationState());
    }

    @DisplayName("mapToUserDtos should should return a list of UserDto")
    @Test
    void mapToUserDtos() {
        //given
        User user = getTestUser();

        //when
        List<UserDto> actual = unit.mapToUserDtos(Lists.list(user));

        //then
        assertEquals(1, actual.size());

        assertEquals(id.toString(), actual.getFirst().getId());
        assertEquals(walletCode, actual.getFirst().getWalletCode());
        assertEquals(email, actual.getFirst().getEmail());
        assertEquals(nickname, actual.getFirst().getNickname());
        assertTrue(actual.getFirst().isCheckNewsletter());
        assertEquals(nationality, actual.getFirst().getNationality());
        assertEquals(playerLocation, actual.getFirst().getPlayerLocation());
        assertEquals(dateOfBirth, actual.getFirst().getDateOfBirth());
        assertEquals(gender, actual.getFirst().getGender());
        assertEquals(gameRole.getName(), actual.getFirst().getFavouriteRole());
        assertTrue(actual.getFirst().isEnabled());
        assertTrue(actual.getFirst().isVerified());
        assertEquals(createdAt, actual.getFirst().getCreatedAt());
        assertEquals(gameWallet, actual.getFirst().getGameWallet());
        assertEquals(actualRole.getName(), actual.getFirst().getActualRole());
        assertEquals(avatarId, actual.getFirst().getAvatarId());
        assertEquals(registrationState.name(), actual.getFirst().getRegistrationState());
    }

    @DisplayName("fromRegistrationDto should should return a User")
    @Test
    void fromRegistrationDto() {
        //given
        UserRegistrationDto userRegistrationDto = new UserRegistrationDto();
        userRegistrationDto.setEmail(email);
        userRegistrationDto.setNickname(nickname);
        userRegistrationDto.setNationality(nationality);
        userRegistrationDto.setPlayerLocation(playerLocation);
        userRegistrationDto.setDateOfBirth("01-01-2025");
        userRegistrationDto.setGender(gender);
        userRegistrationDto.setFavouriteRole(gameRole.getName());
        userRegistrationDto.setAcceptedNewsletter(true);
        userRegistrationDto.setAcceptedPrivacy(true);

        //when
        User actual = unit.fromRegistrationDto(userRegistrationDto);

        //then
        assertNull(actual.getId());
        assertNull(actual.getWalletCode());
        assertEquals(email, actual.getEmail());
        assertEquals(nickname, actual.getNickname());
        assertTrue(actual.isAcceptedNewsletter());
        assertEquals(nationality, actual.getNationality());
        assertEquals(playerLocation, actual.getPlayerLocation());
        assertEquals(dateOfBirth, actual.getDateOfBirth());
        assertEquals(gender, actual.getGender());
        assertEquals(gameRole, actual.getFavouriteRole());
        assertTrue(actual.isEnabled());
        assertFalse(actual.isVerified());
        assertNull(actual.getCreatedAt());
        assertEquals(new BigDecimal("0.00"), actual.getGameWallet());
        assertNull(actual.getActualRole());
        assertNull(actual.getAvatarId());
        assertNull(actual.getRegistrationState());
    }

    @DisplayName("fromWalletDto should should return a User")
    @Test
    void fromWalletDto() {
        //given
        WalletDto dto = new WalletDto();
        dto.setWalletCode(walletCode);
        //dto.setPassword(password);

        //when
        User actual = unit.fromWalletDto(dto);

        //then
        assertNull(actual.getId());
        assertEquals(walletCode, actual.getWalletCode());
        assertNull(actual.getEmail());
        assertNull(actual.getNickname());
        assertFalse(actual.isAcceptedNewsletter());
        assertNull(actual.getNationality());
        assertNull(actual.getPlayerLocation());
        assertNull(actual.getDateOfBirth());
        assertNull(actual.getGender());
        assertNull(actual.getFavouriteRole());
        assertTrue(actual.isEnabled());
        assertFalse(actual.isVerified());
        assertNull(actual.getCreatedAt());
        assertEquals(new BigDecimal("0.00"), actual.getGameWallet());
        assertEquals(Role.FREE_AGENT, actual.getActualRole());
        assertNull(actual.getAvatarId());
        assertEquals(RegistrationState.WALLET_INSERTED, actual.getRegistrationState());
        //assertEquals(password, actual.getPassword());
    }

    // ---------------- Utility methods -------------

    private User getTestUser() {
        User user = new User();
        user.setId(id);
        user.setWalletCode(walletCode);
        user.setEmail(email);
        user.setNickname(nickname);
        user.setAcceptedNewsletter(true);
        user.setAcceptedPrivacy(true);
        user.setNationality(nationality);
        user.setPlayerLocation(playerLocation);
        user.setDateOfBirth(dateOfBirth);
        user.setGender(gender);
        user.setFavouriteRole(gameRole);
        user.setEnabled(true);
        user.setVerified(true);
        user.setCreatedAt(createdAt);
        user.setGameWallet(gameWallet);
        user.setActualRole(actualRole);
        user.setAvatarId(avatarId);
        user.setRegistrationState(registrationState);
        return user;
    }
}