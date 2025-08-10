import React from 'react'
import buildyourbestteam from '../components/video/buildyourbestteam.png'
import immagine1 from '../components/video/immagine1.jpeg'
import immagine2 from '../components/video/immagine2.jpeg'
import immagine3 from '../components/video/immagine3.jpeg'

interface Props {
    version: number
}
const Paragrafo = ({ version }: Props) => {
    var immagine: string = buildyourbestteam
    var colore: string = '#00000'
    var testo : string = ''
    var titolo : string = ''

    if (version === 1) {
        immagine = buildyourbestteam
        colore = "#208b3a"
        testo = "A NFT Football simulation game built on the Polygon Blockchain. You will have to train to be the protagonist of the most difficult matches and win the most important trophies with your team. Be the first."
        titolo = "WELCOME TO BESTEAM"
    }
    if (version === 2) {
        titolo = "JUST LIKE YOU!"
        immagine = immagine1
        colore = "#2dc653"
        testo="You can be yourself showing your outfit in the BestCity. Your avatar is fully customizable with rare and exclusive NFTS; modify your look, your hairstyle, your accessories and much more ... Wear your team colors and promote a personal style."
    }
    if (version === 3) {
        titolo = "BUILD YOUR TEAM"
        colore = "#208b3a"
        immagine = immagine2
        testo ="You can be the manager or just be a football player. Each team has a customizable logo and home stadium. With your teammates you can participate in competitions of all kinds, winning prizes and climbing rankings."
    }
    if (version === 4) {
        titolo="NFTs"
        immagine = immagine3
        colore = "#2dc653"
        testo ="Build your inventory by selecting your favorite NFTs from a wide variety; they are useful for customizing the avatar and the team in an exclusive way.You can buy or resell them in the “OpenSea” Marketplace (link)."
    }
    if (version === 5) {
        titolo="eSports EVENTS"
        immagine = immagine3
        colore = "#208b3a"
        testo = "Join your team in the competitive 'Event' mode to win countless prizes and recognitions.They are open to everyone regardless of gender and physical abilities.With your team .. 'be the first'"
    }
    return (
        <div className="paragrafo" style={{ backgroundColor: colore }}>
            <img className="paragrafo-image" src={immagine} alt="build your best team" />
            <div>
            <p className="titolo-paragrafo"> {titolo} </p>
            <p className="testo-paragrafo">{testo}</p>
            </div>
        </div>
    )
}

export default Paragrafo