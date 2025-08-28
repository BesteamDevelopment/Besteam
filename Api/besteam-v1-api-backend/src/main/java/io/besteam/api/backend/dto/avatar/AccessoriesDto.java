package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccessoriesDto {
    private List<SelectableItemDto> glasses;
    private List<SelectableItemDto> mask;
    private List<SelectableItemDto> earring;
    private List<SelectableItemDto> gloves;
    private List<SelectableItemDto> bracelet;
    private List<SelectableItemDto> wristwatch;
    private List<SelectableItemDto> smartphone;
    private List<SelectableItemDto> ball;
    private List<SelectableItemDto> dufflebag;
    private List<SelectableItemDto> piercing;
}
