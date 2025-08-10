package com.besteam.backend.service;

import com.besteam.backend.dto.UserRegistrationDto;
import com.besteam.backend.excepton.UserValidationException;
import com.besteam.backend.repository.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@ExtendWith(MockitoExtension.class)
class UserValidatorTest {

    private UserValidator unit;

    @Mock
    private UserRepository userRepositoryMock;

    private UserRegistrationDto userRegistrationDto;

    @BeforeEach
    void setUp() {
        unit = new UserValidator(userRepositoryMock);

        userRegistrationDto = new UserRegistrationDto();
        userRegistrationDto.setNickname("nickname-1");
        userRegistrationDto.setEmail("test@g.com");
        userRegistrationDto.setNationality("Italy");
        userRegistrationDto.setPlayerLocation("UK");
        userRegistrationDto.setDateOfBirth("10-12-2024");
        userRegistrationDto.setGender("gender");
        userRegistrationDto.setFavouriteRole("Goalkeeper");
        userRegistrationDto.setAcceptedPrivacy(true);
    }

    @DisplayName("The field 'nickname' is too short")
    @Test
    void validate_UserCreation_nickname_short_false() {
        //given
        userRegistrationDto.setNickname("aa");

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("nickname", expected.getErrors().getFirst().getField());
        assertEquals("The field 'nickname' is too short: minimum 3 characters.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'nickname' is too long")
    @Test
    void validate_UserCreation_nickname_long_false() {
        //given
        userRegistrationDto.setNickname("aaaaaaaaaaaaaaaaa");

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("nickname", expected.getErrors().getFirst().getField());
        assertEquals("The field 'nickname' is too long: maximum 16 characters.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'nickname' should contain at lest 3 letters")
    @Test
    void validate_UserCreation_nickname_letters_false() {
        //given
        userRegistrationDto.setNickname("aa1");

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("nickname", expected.getErrors().getFirst().getField());
        assertEquals("The field 'nickname' should contain at least 3 letters.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'nickname' should contain just these special characters ['-']")
    @Test
    void validate_UserCreation_nickname_numbers_false() {
        //given
        userRegistrationDto.setNickname("aaa1-!");

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("nickname", expected.getErrors().getFirst().getField());
        assertEquals("The field 'nickname' should contain just these special characters ['-'].", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'nickname' can't be empty")
    @Test
    void validate_UserCreation_nickname_empty_false() {
        //given
        userRegistrationDto.setNickname("a");

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("nickname", expected.getErrors().getFirst().getField());
        assertEquals("The field 'nickname' is too short: minimum 3 characters.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'email' should be a legal email address")
    @Test
    void validate_UserCreation_email_not_legal_false() {
        //given
        userRegistrationDto.setEmail("test");

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("email", expected.getErrors().getFirst().getField());
        assertEquals("The field 'email' should be a legal email address.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'email' can't be empty")
    @Test
    void validate_UserCreation_email_empty_false() {
        //given
        userRegistrationDto.setEmail(null);

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("email", expected.getErrors().getFirst().getField());
        assertEquals("The field 'email' can't be empty.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'nationality' can't be empty")
    @Test
    void validate_UserCreation_nationality_empty_false() {
        //given
        userRegistrationDto.setNationality(null);

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("nationality", expected.getErrors().getFirst().getField());
        assertEquals("The field 'nationality' can't be empty.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'player_location' can't be empty")
    @Test
    void validate_UserCreation_playerLocation_empty_false() {
        //given
        userRegistrationDto.setPlayerLocation(null);

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("player_location", expected.getErrors().getFirst().getField());
        assertEquals("The field 'player_location' can't be empty.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'date_of_birth' can't be empty")
    @Test
    void validate_UserCreation_birthDate_empty_false() {
        //given
        userRegistrationDto.setDateOfBirth(null);

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("date_of_birth", expected.getErrors().getFirst().getField());
        assertEquals("The field 'date_of_birth' can't be empty.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'date_of_birth' should be in the 'DD-MM-YYYY' format.")
    @Test
    void validate_UserCreation_birthDate_format_false() {
        //given
        userRegistrationDto.setDateOfBirth("2024/12/12");

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("date_of_birth", expected.getErrors().getFirst().getField());
        assertEquals("The field 'date_of_birth' should be in the 'DD-MM-YYYY' format.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'gender' can't be empty.")
    @Test
    void validate_UserCreation_gender_empty_false() {
        //given
        userRegistrationDto.setGender(null);

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("gender", expected.getErrors().getFirst().getField());
        assertEquals("The field 'gender' can't be empty.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'favourite_role' can't be empty.")
    @Test
    void validate_UserCreation_favouriteRole_empty_false() {
        //given
        userRegistrationDto.setFavouriteRole(null);

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("favourite_role", expected.getErrors().getFirst().getField());
        assertEquals("The field 'favourite_role' can't be empty.", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'favourite_role' value should be one one of [].")
    @Test
    void validate_UserCreation_favouriteRole_wrong_value_false() {
        //given
        userRegistrationDto.setFavouriteRole("test");

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("favourite_role", expected.getErrors().getFirst().getField());
        assertEquals("The field 'favourite_role' value should be one one of [Goalkeeper, Full Back, Central Defender, Defensive Midfielder, Midfielder, Offensive Midfielder, Side Midfielder, Winger, Striker, Second Forward].", expected.getErrors().getFirst().getMessage());
    }

    @DisplayName("The field 'accepted_privacy' can't be false.")
    @Test
    void validate_UserCreation_accepted_privacy_false() {
        //given
        userRegistrationDto.setAcceptedPrivacy(false);

        //when
        UserValidationException expected = assertThrows(
                UserValidationException.class,
                () -> unit.validateUserCreation(userRegistrationDto),
                "Expected doThing() to throw, but it didn't"
        );

        //then
        assertEquals("Validation failed", expected.getMessage());
        assertEquals("accepted_privacy", expected.getErrors().getFirst().getField());
        assertEquals("The field 'accepted_privacy' can't be false.", expected.getErrors().getFirst().getMessage());
    }

}