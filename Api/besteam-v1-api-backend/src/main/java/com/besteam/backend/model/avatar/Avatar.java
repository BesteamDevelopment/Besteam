package com.besteam.backend.model.avatar;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "avatars")
public class Avatar {
    @Id
    private String id;
    private String statsRole;
    private AvatarDetails avatar;
}
