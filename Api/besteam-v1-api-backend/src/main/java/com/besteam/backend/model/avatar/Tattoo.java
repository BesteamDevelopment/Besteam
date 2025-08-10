package com.besteam.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Tattoo {
    private List<SelectableItem> neck;
    private List<SelectableItem> arm;
    private List<SelectableItem> leg;
}
