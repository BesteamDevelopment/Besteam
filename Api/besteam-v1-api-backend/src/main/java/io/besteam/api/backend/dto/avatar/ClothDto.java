package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClothDto {
    private CasualDto casual;
    private AccessoriesDto accessories;
    private FootballKitsDto footballKits;
}
