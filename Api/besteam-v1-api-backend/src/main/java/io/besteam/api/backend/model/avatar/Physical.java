package io.besteam.api.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Physical {
    private float strenght;
    private float resistance;
    private float elevation;
    private float tackle;
    private float slidingTackle;
    private float anticipation;
}
