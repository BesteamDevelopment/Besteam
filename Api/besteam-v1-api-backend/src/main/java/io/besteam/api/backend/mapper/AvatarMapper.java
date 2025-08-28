package io.besteam.api.backend.mapper;


import io.besteam.api.backend.dto.avatar.*;
import io.besteam.api.backend.model.avatar.*;

import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AvatarMapper {

    public AvatarDto toDto(Avatar avatar) {
        if (avatar == null) return null;
        AvatarDto dto = new AvatarDto();
        dto.setId(avatar.getId());
        dto.setStatsRole(avatar.getStatsRole());
        if (avatar.getAvatar() != null) {
            AvatarDetailsDto details = new AvatarDetailsDto();
            details.setBody(mapBodyToDto(avatar.getAvatar().getBody()));
            details.setCloth(mapClothToDto(avatar.getAvatar().getCloth()));
            details.setTattoo(mapTattooToDto(avatar.getAvatar().getTattoo()));
            details.setAnimation(mapAnimationToDto(avatar.getAvatar().getAnimation()));
            details.setStats(mapStatsToDto(avatar.getAvatar().getStats()));
            dto.setAvatar(details);
        }
        return dto;
    }

    public Avatar toModel(AvatarDto dto) {
        if (dto == null) return null;
        Avatar avatar = new Avatar();
        avatar.setId(dto.getId());
        avatar.setStatsRole(dto.getStatsRole());
        if (dto.getAvatar() != null) {
            AvatarDetails details = new AvatarDetails();
            details.setBody(mapBodyToModel(dto.getAvatar().getBody()));
            details.setCloth(mapClothToModel(dto.getAvatar().getCloth()));
            details.setTattoo(mapTattooToModel(dto.getAvatar().getTattoo()));
            details.setAnimation(mapAnimationToModel(dto.getAvatar().getAnimation()));
            details.setStats(mapStatsToModel(dto.getAvatar().getStats()));
            avatar.setAvatar(details);
        }
        return avatar;
    }

    // Body
    private BodyDto mapBodyToDto(Body body) {
        if (body == null) return null;
        BodyDto dto = new BodyDto();
        dto.setPreset(body.getPreset());
        dto.setTone(body.getTone());
        dto.setHeight(body.getHeight());
        dto.setWeight(body.getWeight());
        dto.setBodyType(body.getBodyType());
        dto.setEye(mapPositionalFeatureToDto(body.getEye()));
        dto.setEyebrows(mapPositionalFeatureToDto(body.getEyebrows()));
        dto.setEyelashes(mapPositionalFeatureToDto(body.getEyelashes()));
        dto.setNose(mapPositionalFeatureToDto(body.getNose()));
        dto.setMouth(mapPositionalFeatureToDto(body.getMouth()));
        dto.setCheekAndJaw(mapPositionalFeatureToDto(body.getCheekAndJaw()));
        dto.setEar(mapPositionalFeatureToDto(body.getEar()));
        dto.setHair(mapPositionalFeatureToDto(body.getHair()));
        dto.setBeard(mapPositionalFeatureToDto(body.getBeard()));
        return dto;
    }

    private Body mapBodyToModel(BodyDto dto) {
        if (dto == null) return null;
        Body body = new Body();
        body.setPreset(dto.getPreset());
        body.setTone(dto.getTone());
        body.setHeight(dto.getHeight());
        body.setWeight(dto.getWeight());
        body.setBodyType(dto.getBodyType());
        body.setEye(mapPositionalFeatureToModel(dto.getEye()));
        body.setEyebrows(mapPositionalFeatureToModel(dto.getEyebrows()));
        body.setEyelashes(mapPositionalFeatureToModel(dto.getEyelashes()));
        body.setNose(mapPositionalFeatureToModel(dto.getNose()));
        body.setMouth(mapPositionalFeatureToModel(dto.getMouth()));
        body.setCheekAndJaw(mapPositionalFeatureToModel(dto.getCheekAndJaw()));
        body.setEar(mapPositionalFeatureToModel(dto.getEar()));
        body.setHair(mapPositionalFeatureToModel(dto.getHair()));
        body.setBeard(mapPositionalFeatureToModel(dto.getBeard()));
        return body;
    }

    private PositionalFeatureDto mapPositionalFeatureToDto(PositionalFeature pf) {
        if (pf == null) return null;
        PositionalFeatureDto dto = new PositionalFeatureDto();
        dto.setType(pf.getType()); dto.setPosition(pf.getPosition());
        dto.setSize(pf.getSize()); dto.setColor(pf.getColor());
        return dto;
    }

    private PositionalFeature mapPositionalFeatureToModel(PositionalFeatureDto dto) {
        if (dto == null) return null;
        PositionalFeature pf = new PositionalFeature();
        pf.setType(dto.getType()); pf.setPosition(dto.getPosition());
        pf.setSize(dto.getSize()); pf.setColor(dto.getColor());
        return pf;
    }

    // Cloth
    private ClothDto mapClothToDto(Cloth cloth) {
        if (cloth == null) return null;
        ClothDto dto = new ClothDto();
        dto.setCasual(mapCasualToDto(cloth.getCasual()));
        dto.setAccessories(mapAccessoriesToDto(cloth.getAccessories()));
        dto.setFootballKits(mapFootballKitsToDto(cloth.getFootballKits()));
        return dto;
    }

    private Cloth mapClothToModel(ClothDto dto) {
        if (dto == null) return null;
        Cloth cloth = new Cloth();
        cloth.setCasual(mapCasualToModel(dto.getCasual()));
        cloth.setAccessories(mapAccessoriesToModel(dto.getAccessories()));
        cloth.setFootballKits(mapFootballKitsToModel(dto.getFootballKits()));
        return cloth;
    }

    private CasualDto mapCasualToDto(Casual c) {
        if (c == null) return null;
        CasualDto dto = new CasualDto();
        dto.setUndershirt(c.getUndershirt()); dto.setTshirt(c.getTshirt());
        dto.setSweatshirt(c.getSweatshirt()); dto.setSweater(c.getSweater());
        dto.setSkirt(c.getSkirt()); dto.setSocks(c.getSocks());
        dto.setShortItem(c.getShortItem()); dto.setPants(c.getPants());
        dto.setShoes(c.getShoes());
        return dto;
    }

    private Casual mapCasualToModel(CasualDto dto) {
        if (dto == null) return null;
        Casual c = new Casual();
        c.setUndershirt(dto.getUndershirt()); c.setTshirt(dto.getTshirt());
        c.setSweatshirt(dto.getSweatshirt()); c.setSweater(dto.getSweater());
        c.setSkirt(dto.getSkirt()); c.setSocks(dto.getSocks());
        c.setShortItem(dto.getShortItem()); c.setPants(dto.getPants());
        c.setShoes(dto.getShoes());
        return c;
    }

    private AccessoriesDto mapAccessoriesToDto(Accessories a) {
        if (a == null) return null;
        AccessoriesDto dto = new AccessoriesDto();
        dto.setGlasses(mapSelectableList(a.getGlasses()));
        dto.setMask(mapSelectableList(a.getMask()));
        dto.setEarring(mapSelectableList(a.getEarring()));
        dto.setGloves(mapSelectableList(a.getGloves()));
        dto.setBracelet(mapSelectableList(a.getBracelet()));
        dto.setWristwatch(mapSelectableList(a.getWristwatch()));
        dto.setSmartphone(mapSelectableList(a.getSmartphone()));
        dto.setBall(mapSelectableList(a.getBall()));
        dto.setDufflebag(mapSelectableList(a.getDufflebag()));
        dto.setPiercing(mapSelectableList(a.getPiercing()));
        return dto;
    }

    private Accessories mapAccessoriesToModel(AccessoriesDto dto) {
        if (dto == null) return null;
        Accessories a = new Accessories();
        a.setGlasses(mapSelectableListDto(dto.getGlasses()));
        a.setMask(mapSelectableListDto(dto.getMask()));
        a.setEarring(mapSelectableListDto(dto.getEarring()));
        a.setGloves(mapSelectableListDto(dto.getGloves()));
        a.setBracelet(mapSelectableListDto(dto.getBracelet()));
        a.setWristwatch(mapSelectableListDto(dto.getWristwatch()));
        a.setSmartphone(mapSelectableListDto(dto.getSmartphone()));
        a.setBall(mapSelectableListDto(dto.getBall()));
        a.setDufflebag(mapSelectableListDto(dto.getDufflebag()));
        a.setPiercing(mapSelectableListDto(dto.getPiercing()));
        return a;
    }

    private FootballKitsDto mapFootballKitsToDto(FootballKits fk) {
        if (fk == null) return null;
        FootballKitsDto dto = new FootballKitsDto();
        dto.setBoots(mapSelectableList(fk.getBoots()));
        dto.setShinguards(mapSelectableList(fk.getShinguards()));
        dto.setFootballSocks(mapSelectableList(fk.getFootballSocks()));
        dto.setFootballGloves(mapSelectableList(fk.getFootballGloves()));
        dto.setJersey(mapSelectableList(fk.getJersey()));
        return dto;
    }

    private FootballKits mapFootballKitsToModel(FootballKitsDto dto) {
        if (dto == null) return null;
        FootballKits fk = new FootballKits();
        fk.setBoots(mapSelectableListDto(dto.getBoots()));
        fk.setShinguards(mapSelectableListDto(dto.getShinguards()));
        fk.setFootballSocks(mapSelectableListDto(dto.getFootballSocks()));
        fk.setFootballGloves(mapSelectableListDto(dto.getFootballGloves()));
        fk.setJersey(mapSelectableListDto(dto.getJersey()));
        return fk;
    }

    // SelectableItem
    private List<SelectableItemDto> mapSelectableList(List<SelectableItem> list) {
        if (list == null) return null;
        return list.stream()
                .map(item -> new SelectableItemDto(item.getType(), item.isActive()))
                .toList();
    }

    private List<SelectableItem> mapSelectableListDto(List<SelectableItemDto> list) {
        if (list == null) return null;
        return list.stream()
                .map(dto -> new SelectableItem(dto.getType(), dto.isActive()))
                .toList();
    }

    // Tattoo & Animation
    private TattooDto mapTattooToDto(Tattoo tattoo) {
        if (tattoo == null) return null;
        TattooDto dto = new TattooDto();
        dto.setNeck(mapSelectableList(tattoo.getNeck()));
        dto.setArm(mapSelectableList(tattoo.getArm()));
        dto.setLeg(mapSelectableList(tattoo.getLeg()));
        return dto;
    }

    private Tattoo mapTattooToModel(TattooDto dto) {
        if (dto == null) return null;
        Tattoo t = new Tattoo();
        t.setNeck(mapSelectableListDto(dto.getNeck()));
        t.setArm(mapSelectableListDto(dto.getArm()));
        t.setLeg(mapSelectableListDto(dto.getLeg()));
        return t;
    }

    private AnimationDto mapAnimationToDto(Animation anim) {
        if (anim == null) return null;
        AnimationDto dto = new AnimationDto();
        dto.setRunStyle(mapSelectableList(anim.getRunStyle()));
        dto.setCelebration(mapSelectableList(anim.getCelebration()));
        dto.setPenalty(mapSelectableList(anim.getPenalty()));
        dto.setFreeKickStyle(mapSelectableList(anim.getFreeKickStyle()));
        return dto;
    }

    private Animation mapAnimationToModel(AnimationDto dto) {
        if (dto == null) return null;
        Animation anim = new Animation();
        anim.setRunStyle(mapSelectableListDto(dto.getRunStyle()));
        anim.setCelebration(mapSelectableListDto(dto.getCelebration()));
        anim.setPenalty(mapSelectableListDto(dto.getPenalty()));
        anim.setFreeKickStyle(mapSelectableListDto(dto.getFreeKickStyle()));
        return anim;
    }

    private StatsDto mapStatsToDto(Stats stats) {
        if (stats == null) return null;
        StatsDto dto = new StatsDto();
        dto.setOverall(stats.getOverall());
        dto.setStatsRole(stats.getStatsRole());
        dto.setFoot(stats.getFoot());
        dto.setMatchesPlayed(stats.getMatchesPlayed());
        dto.setGoalsScored(stats.getGoalsScored());
        dto.setSkill(mapSkillToDto(stats.getSkill()));
        dto.setMindset(mapMindsetToDto(stats.getMindset()));
        dto.setSpeed(mapSpeedToDto(stats.getSpeed()));
        dto.setPhysical(mapPhysicalToDto(stats.getPhysical()));
        dto.setKick(mapKickToDto(stats.getKick()));
        dto.setPass(mapPassToDto(stats.getPass()));
        dto.setGoalkeeper(mapGoalkeeperToDto(stats.getGoalkeeper()));
        return dto;
    }

    private Stats mapStatsToModel(StatsDto dto) {
        if (dto == null) return null;
        Stats stats = new Stats();
        stats.setOverall(dto.getOverall());
        stats.setStatsRole(dto.getStatsRole());
        stats.setFoot(dto.getFoot());
        stats.setMatchesPlayed(dto.getMatchesPlayed());
        stats.setGoalsScored(dto.getGoalsScored());
        stats.setSkill(mapSkillToModel(dto.getSkill()));
        stats.setMindset(mapMindsetToModel(dto.getMindset()));
        stats.setSpeed(mapSpeedToModel(dto.getSpeed()));
        stats.setPhysical(mapPhysicalToModel(dto.getPhysical()));
        stats.setKick(mapKickToModel(dto.getKick()));
        stats.setPass(mapPassToModel(dto.getPass()));
        stats.setGoalkeeper(mapGoalkeeperToModel(dto.getGoalkeeper()));
        return stats;
    }

    // Skill
    private SkillDto mapSkillToDto(Skill s) {
        if (s == null) return null;
        SkillDto dto = new SkillDto();
        dto.setDribbling(s.getDribbling());
        dto.setTrap(s.getTrap());
        dto.setHandle(s.getHandle());
        dto.setFlair(s.getFlair());
        dto.setElegance(s.getElegance());
        return dto;
    }

    private Skill mapSkillToModel(SkillDto d) {
        if (d == null) return null;
        Skill s = new Skill();
        s.setDribbling(d.getDribbling());
        s.setTrap(d.getTrap());
        s.setHandle(d.getHandle());
        s.setFlair(d.getFlair());
        s.setElegance(d.getElegance());
        return s;
    }

    // Mindset
    private MindsetDto mapMindsetToDto(Mindset m) {
        if (m == null) return null;
        MindsetDto dto = new MindsetDto();
        dto.setComposure(m.getComposure());
        return dto;
    }

    private Mindset mapMindsetToModel(MindsetDto d) {
        if (d == null) return null;
        Mindset m = new Mindset();
        m.setComposure(d.getComposure());
        return m;
    }

    // Speed
    private SpeedDto mapSpeedToDto(Speed s) {
        if (s == null) return null;
        SpeedDto dto = new SpeedDto();
        dto.setTopSpeed(s.getTopSpeed());
        dto.setAcceleration(s.getAcceleration());
        dto.setReactivity(s.getReactivity());
        dto.setAgility(s.getAgility());
        return dto;
    }

    private Speed mapSpeedToModel(SpeedDto d) {
        if (d == null) return null;
        Speed s = new Speed();
        s.setTopSpeed(d.getTopSpeed());
        s.setAcceleration(d.getAcceleration());
        s.setReactivity(d.getReactivity());
        s.setAgility(d.getAgility());
        return s;
    }

    // Physical
    private PhysicalDto mapPhysicalToDto(Physical p) {
        if (p == null) return null;
        PhysicalDto dto = new PhysicalDto();
        dto.setStrenght(p.getStrenght());
        dto.setResistance(p.getResistance());
        dto.setElevation(p.getElevation());
        dto.setTackle(p.getTackle());
        dto.setSlidingTackle(p.getSlidingTackle());
        dto.setAnticipation(p.getAnticipation());
        return dto;
    }

    private Physical mapPhysicalToModel(PhysicalDto d) {
        if (d == null) return null;
        Physical p = new Physical();
        p.setStrenght(d.getStrenght());
        p.setResistance(d.getResistance());
        p.setElevation(d.getElevation());
        p.setTackle(d.getTackle());
        p.setSlidingTackle(d.getSlidingTackle());
        p.setAnticipation(d.getAnticipation());
        return p;
    }

    // Kick
    private KickDto mapKickToDto(Kick k) {
        if (k == null) return null;
        KickDto dto = new KickDto();
        dto.setFinesseShot(k.getFinesseShot());
        dto.setSpinShot(k.getSpinShot());
        dto.setVolleyShot(k.getVolleyShot());
        dto.setPowerShot(k.getPowerShot());
        dto.setHeaderShot(k.getHeaderShot());
        dto.setAcrobaticShot(k.getAcrobaticShot());
        dto.setPenaltyShot(k.getPenaltyShot());
        return dto;
    }

    private Kick mapKickToModel(KickDto d) {
        if (d == null) return null;
        Kick k = new Kick();
        k.setFinesseShot(d.getFinesseShot());
        k.setSpinShot(d.getSpinShot());
        k.setVolleyShot(d.getVolleyShot());
        k.setPowerShot(d.getPowerShot());
        k.setHeaderShot(d.getHeaderShot());
        k.setAcrobaticShot(d.getAcrobaticShot());
        k.setPenaltyShot(d.getPenaltyShot());
        return k;
    }

    // Pass
    private PassDto mapPassToDto(Pass p) {
        if (p == null) return null;
        PassDto dto = new PassDto();
        dto.setShortPass(p.getShortPass());
        dto.setDrivenPass(p.getDrivenPass());
        dto.setVolleyPass(p.getVolleyPass());
        dto.setHighPass(p.getHighPass());
        dto.setThroughPass(p.getThroughPass());
        return dto;
    }

    private Pass mapPassToModel(PassDto d) {
        if (d == null) return null;
        Pass p = new Pass();
        p.setShortPass(d.getShortPass());
        p.setDrivenPass(d.getDrivenPass());
        p.setVolleyPass(d.getVolleyPass());
        p.setHighPass(d.getHighPass());
        p.setThroughPass(d.getThroughPass());
        return p;
    }

    // Goalkeeper
    private GoalkeeperDto mapGoalkeeperToDto(Goalkeeper g) {
        if (g == null) return null;
        GoalkeeperDto dto = new GoalkeeperDto();
        dto.setCatching(g.getCatching());
        dto.setDivingReach(g.getDivingReach());
        dto.setRushing(g.getRushing());
        dto.setThrowing(g.getThrowing());
        dto.setLongKicking(g.getLongKicking());
        dto.setReflexes(g.getReflexes());
        dto.setDiving(g.getDiving());
        return dto;
    }

    private Goalkeeper mapGoalkeeperToModel(GoalkeeperDto d) {
        if (d == null) return null;
        Goalkeeper g = new Goalkeeper();
        g.setCatching(d.getCatching());
        g.setDivingReach(d.getDivingReach());
        g.setRushing(d.getRushing());
        g.setThrowing(d.getThrowing());
        g.setLongKicking(d.getLongKicking());
        g.setReflexes(d.getReflexes());
        g.setDiving(d.getDiving());
        return g;
    }


}
