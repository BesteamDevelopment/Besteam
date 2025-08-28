package io.besteam.api.backend.dto.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AvatarDto {
    private String id;
    private String statsRole;
    private AvatarDetailsDto avatar;
}
