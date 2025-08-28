package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TattooDto {
    private List<SelectableItemDto> neck;
    private List<SelectableItemDto> arm;
    private List<SelectableItemDto> leg;
}
