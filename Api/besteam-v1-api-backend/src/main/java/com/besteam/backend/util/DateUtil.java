package com.besteam.backend.util;

import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class DateUtil {

    private static final DateTimeFormatter DATE_FORMATTER = DateTimeFormatter.ofPattern("dd-MM-yyyy").withLocale(Locale.ITALY);

    public static LocalDate stringToLocalDate(String stringDate) {
        return LocalDate.parse(stringDate, DATE_FORMATTER);
    }
}
