import React from 'react'
import './CardCreator.css'
import tiktokicona from '../../media/Icona TikTok.png'
import { StaffType } from '../../const/StaffType';
import { CreatorType } from '../../const/CreatorType';

type CardCreatorProps = {
    userCreator: CreatorType;
    isActive: boolean;
    onClick: () => void;
  };
const CardCreator :React.FC<CardCreatorProps> = ({ userCreator, isActive, onClick })=> {
    return (
        <div className={`cardStyle cardLayout ${isActive ? 'active' : ''}`} 
        onClick={onClick}>
            <img className='immagineCard' src={userCreator.src}>

            </img>
            <p className='testoNome'>{userCreator.nome}</p>
            <div className='gruppoIcone'>
            <a href={userCreator.tiktok}><img src={tiktokicona}></img></a>
            </div>


        </div>
    )
}

export default CardCreator