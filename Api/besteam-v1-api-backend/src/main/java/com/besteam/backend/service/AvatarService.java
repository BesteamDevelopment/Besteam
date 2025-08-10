package com.besteam.backend.service;

import com.besteam.backend.dto.avatar.AvatarDto;
import com.besteam.backend.mapper.AvatarMapper;
import com.besteam.backend.model.avatar.Avatar;
import com.besteam.backend.repository.AvatarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AvatarService {
    private final AvatarRepository avatarRepository;
    private final AvatarMapper avatarMapper;

    public AvatarDto createAvatar(AvatarDto dto) {
        Avatar model = avatarMapper.toModel(dto);
        Avatar saved = avatarRepository.save(model);
        return avatarMapper.toDto(saved);
    }

    public Optional<AvatarDto> findById(String id) {
        return avatarRepository.findById(id)
                .map(avatarMapper::toDto);
    }

    public AvatarDto updateAvatar(String id, AvatarDto dto) {
        // Assumiamo che l’id esista (o gestire Optional/NotFound)
        Avatar model = avatarMapper.toModel(dto);
        model.setId(id);
        Avatar saved = avatarRepository.save(model);
        return avatarMapper.toDto(saved);
    }

    public void deleteAvatar(String id) {
        avatarRepository.deleteById(id);
    }
}
