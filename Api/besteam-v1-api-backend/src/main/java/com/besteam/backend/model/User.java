package com.besteam.backend.model;

import com.besteam.backend.model.enums.GameRole;
import com.besteam.backend.model.enums.RegistrationState;
import com.besteam.backend.model.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.math.BigDecimal;
import java.time.Instant;
import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(name = "wallet_code", unique = true)
    private String walletCode;

    @Column(unique = true)
    private String email;

    private String nickname;

    @Column(name = "check_newsletter")
    private boolean acceptedNewsletter = false;

    @Column(name = "accepted_privacy")
    private boolean acceptedPrivacy;

    private String nationality;

    @Column(name = "player_location")
    private String playerLocation;

    @Column(name = "date_of_birth")
    private LocalDate dateOfBirth;

    private String gender;

    @Column(name = "favourite_role")
    @Enumerated(EnumType.STRING)
    private GameRole favouriteRole;

    private boolean enabled = true;

    @Column(name = "is_verified")
    private boolean isVerified = false;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false, updatable = false)
    private Instant updatedAt;

    @Column(name = "game_wallet")
    private BigDecimal gameWallet;

    @Column(name = "actual_role")
    @Enumerated(EnumType.STRING)
    private Role actualRole;

    @Column(name = "avatar_id")
    private String avatarId;

    @Enumerated(EnumType.STRING)
    @Column(name = "registration_state")
    private RegistrationState registrationState;

}
