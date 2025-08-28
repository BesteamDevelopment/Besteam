package io.besteam.api.backend.util;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class DateUtilTest {

    @Test
    void stringToLocalDate() {
        //when
        LocalDate actual = DateUtil.stringToLocalDate("12-04-1986");

        //then
        assertEquals(12, actual.getDayOfMonth());
        assertEquals(4, actual.getMonthValue());
        assertEquals(1986, actual.getYear());
    }

    @Test
    void stringToLocalDate_exception() {
        //when
        DateTimeParseException actual = assertThrows(DateTimeParseException.class, () -> DateUtil.stringToLocalDate("12/04/1986"));

        //then
        assertEquals("Text '12/04/1986' could not be parsed at index 2", actual.getMessage());
    }
}