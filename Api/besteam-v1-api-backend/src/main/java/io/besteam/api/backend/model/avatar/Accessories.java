package io.besteam.api.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Accessories {
    private List<SelectableItem> glasses;
    private List<SelectableItem> mask;
    private List<SelectableItem> earring;
    private List<SelectableItem> gloves;
    private List<SelectableItem> bracelet;
    private List<SelectableItem> wristwatch;
    private List<SelectableItem> smartphone;
    private List<SelectableItem> ball;
    private List<SelectableItem> dufflebag;
    private List<SelectableItem> piercing;
}
