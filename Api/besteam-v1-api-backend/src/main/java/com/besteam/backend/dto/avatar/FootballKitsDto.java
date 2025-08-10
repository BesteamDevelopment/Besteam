package com.besteam.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FootballKitsDto {
    private List<SelectableItemDto> boots;
    private List<SelectableItemDto> shinguards;
    private List<SelectableItemDto> footballSocks;
    private List<SelectableItemDto> footballGloves;
    private List<SelectableItemDto> jersey;
}
