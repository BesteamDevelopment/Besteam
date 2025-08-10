package com.besteam.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Animation {
    private List<SelectableItem> runStyle;
    private List<SelectableItem> celebration;
    private List<SelectableItem> penalty;
    private List<SelectableItem> freeKickStyle;
}
