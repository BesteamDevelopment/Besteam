import React from 'react'
import './CardStaff.css'
import tiktokicona from '../../media/Icona TikTok.png'
import linkedin from '../../media/linkedin-logo 1.png'
import { StaffType } from '../../const/StaffType';

type CardStaffProps = {
    userStaff: StaffType;
    isActive: boolean;
    onClick: () => void;
  };
const CardStaff :React.FC<CardStaffProps> = ({ userStaff, isActive, onClick })=> {
    return (
        <div className={`cardStyle cardLayout ${isActive ? 'active' : ''}`} 
        onClick={onClick}>
            <img className='immagineCardStaff' src={userStaff.src}>

            </img>
            <p className='testoNome'>{userStaff.nome}</p>
            <p className='testoRuolo'>{userStaff.ruolo}</p>
            <div className='gruppoIcone'>
            <a href={userStaff.tiktok}><img src={tiktokicona}></img></a>
            <a href={userStaff.linkedin}><img src={linkedin}></img></a>
            </div>


        </div>
    )
}

export default CardStaff