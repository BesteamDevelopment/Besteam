package com.besteam.backend.repository;

import com.besteam.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<User, UUID> {

    List<User> findByEmail(String email);

    Optional<User> findByNickname(String nickname);

    Optional<User> findByWalletCode(String walletCode);
}
