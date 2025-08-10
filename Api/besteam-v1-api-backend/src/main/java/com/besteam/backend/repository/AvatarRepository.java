package com.besteam.backend.repository;

import com.besteam.backend.model.avatar.Avatar;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AvatarRepository extends MongoRepository<Avatar, String> {
}
