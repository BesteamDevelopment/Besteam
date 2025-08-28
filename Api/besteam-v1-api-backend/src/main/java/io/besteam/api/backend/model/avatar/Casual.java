package io.besteam.api.backend.model.avatar;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Casual {
    private String undershirt;
    private String tshirt;
    private String sweatshirt;
    private String sweater;
    private String skirt;
    private String socks;
    @JsonProperty("short")
    private String shortItem;
    private String pants;
    private String shoes;
}
