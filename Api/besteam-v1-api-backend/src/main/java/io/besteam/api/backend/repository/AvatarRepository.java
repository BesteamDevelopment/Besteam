package io.besteam.api.backend.repository;

import io.besteam.api.backend.model.avatar.Avatar;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface AvatarRepository extends MongoRepository<Avatar, String> {
}
