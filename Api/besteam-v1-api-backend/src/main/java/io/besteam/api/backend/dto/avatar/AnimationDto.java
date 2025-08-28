package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AnimationDto {
    private List<SelectableItemDto> runStyle;
    private List<SelectableItemDto> celebration;
    private List<SelectableItemDto> penalty;
    private List<SelectableItemDto> freeKickStyle;
}
