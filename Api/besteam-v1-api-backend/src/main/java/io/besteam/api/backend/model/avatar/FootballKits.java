package io.besteam.api.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FootballKits {
    private List<SelectableItem> boots;
    private List<SelectableItem> shinguards;
    private List<SelectableItem> footballSocks;
    private List<SelectableItem> footballGloves;
    private List<SelectableItem> jersey;
}
