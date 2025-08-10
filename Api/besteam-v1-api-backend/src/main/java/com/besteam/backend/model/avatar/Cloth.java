package com.besteam.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cloth {
    private Casual casual;
    private Accessories accessories;
    private FootballKits footballKits;
}
