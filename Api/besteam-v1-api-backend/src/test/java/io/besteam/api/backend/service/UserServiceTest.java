package io.besteam.api.backend.service;

import io.besteam.api.backend.dto.UserModificationDto;
import io.besteam.api.backend.model.User;
import io.besteam.api.backend.model.enums.GameRole;
import io.besteam.api.backend.model.enums.Role;
import io.besteam.api.backend.repository.UserRepository;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.math.BigDecimal;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    private UserService unit;

    @Mock
    private UserRepository userRepositoryMock;

    private User user;
    private String nickname, nationality, playerLocation, dateOfBirth, gender;
    private UUID userId;
    private BigDecimal gameWallet;

    @BeforeEach
    void setUp() {
        unit = new UserService(userRepositoryMock);

        user = new User();
        userId = UUID.randomUUID();
        gameWallet = BigDecimal.valueOf(new Random().nextLong());
        nickname = RandomStringUtils.randomAlphanumeric(20);
        nationality = RandomStringUtils.randomAlphanumeric(20);
        playerLocation = RandomStringUtils.randomAlphanumeric(20);
        dateOfBirth = "02-05-2024";
        gender = RandomStringUtils.randomAlphanumeric(20);
    }

    @Test
    void getAllUsers() {
        //when
        when(userRepositoryMock.findAll()).thenReturn(Collections.singletonList(user));

        List<User> actual = unit.getAllUsers();

        //then
        assertEquals(1, actual.size());
        assertEquals(user, actual.getFirst());
    }

    @Test
    void getUserById() {
        //when
        when(userRepositoryMock.findById(userId)).thenReturn(Optional.of(user));

        Optional<User> actual = unit.getUserById(userId);

        //then
        assertTrue(actual.isPresent());
        assertEquals(user, actual.get());
    }

    @Test
    void save() {
        //given
        User savedUser = new User();

        //when
        when(userRepositoryMock.save(user)).thenReturn(savedUser);

        User actual = unit.save(user);

        //then
        assertEquals(savedUser, actual);
    }

    @Test
    void deactivateUser_notFound() {
        //when
        when(userRepositoryMock.findById(userId)).thenReturn(Optional.empty());

        Optional<User> actual = unit.deactivateUser(userId);

        //then
        assertFalse(actual.isPresent());
    }

    @Test
    void deactivateUser() {
        //given
        User savedUser = new User();
        savedUser.setEnabled(false);

        //when
        when(userRepositoryMock.findById(userId)).thenReturn(Optional.of(user));
        when(userRepositoryMock.save(user)).thenReturn(savedUser);

        Optional<User> actual = unit.deactivateUser(userId);

        //then
        assertTrue(actual.isPresent());
        assertFalse(actual.get().isEnabled());
    }

    @Test
    void hydrateUser_allPresent() {
        //given
        UserModificationDto userModificationDto = new UserModificationDto();
        userModificationDto.setGameWallet(gameWallet);
        userModificationDto.setNickname(nickname);
        userModificationDto.setNationality(nationality);
        userModificationDto.setPlayerLocation(playerLocation);
        userModificationDto.setDateOfBirth(dateOfBirth);
        userModificationDto.setGender(gender);
        userModificationDto.setFavouriteRole(GameRole.OFFENSIVE_MIDFIELDER.getName());
        userModificationDto.setActualRole(Role.FREE_AGENT.getName());
        userModificationDto.setAcceptedNewsletter(true);
        userModificationDto.setAcceptedPrivacy(true);
        userModificationDto.setEnabled(true);
        userModificationDto.setPaymentVerified(true);

        //when
        User actual = unit.hydrateUser(user, userModificationDto);

        //then
        assertEquals(gameWallet, actual.getGameWallet());
        assertEquals(nickname, actual.getNickname());
        assertEquals(nationality, actual.getNationality());
        assertEquals(playerLocation, actual.getPlayerLocation());
        assertEquals("2024-05-02", actual.getDateOfBirth().toString());
        assertEquals(gender, actual.getGender());
        assertEquals(GameRole.OFFENSIVE_MIDFIELDER, actual.getFavouriteRole());
        assertEquals(Role.FREE_AGENT, actual.getActualRole());
        assertTrue(actual.isAcceptedNewsletter());
        assertTrue(actual.isAcceptedPrivacy());
        assertTrue(actual.isEnabled());
        assertTrue(actual.isVerified());
    }

    @Test
    void hydrateUser_justOnePresent() {
        //given
        UserModificationDto userModificationDto = new UserModificationDto();
        userModificationDto.setGameWallet(gameWallet);

        //when
        User actual = unit.hydrateUser(user, userModificationDto);

        //then
        assertEquals(gameWallet, actual.getGameWallet());
        assertNull(actual.getNationality());
        assertNull(actual.getPlayerLocation());
        assertNull(actual.getDateOfBirth());
        assertNull(actual.getFavouriteRole());
        assertNull(actual.getActualRole());
        assertFalse(actual.isAcceptedNewsletter());
        assertFalse(actual.isAcceptedPrivacy());
        assertTrue(actual.isEnabled());
        assertFalse(actual.isVerified());
    }
}