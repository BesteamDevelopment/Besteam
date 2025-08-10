import React from 'react'
import { LeftMenu } from '../LeftMenu'
import { HeaderDapp } from '../HeaderDapp'
import arena from './arena.png'
import bestcity from './bestcity.png'
import marketplace from './marketplace.webp'
import casellaRanking from './casellaRanking.png'
const DappDashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#1C1C1C' }}>
            <HeaderDapp />
            <LeftMenu />
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', position: 'fixed', top: '4.167vw', left: ' 5vw', gap: '3.125vw', backgroundColor: '#1C1C1C' }}>
                <div style={{ display: 'flex', flexDirection: 'column', height:'37.5vw' , marginTop:'2.778vw', marginLeft:'5.556vw', gap:'2.206vw'}}>
                    <img src={arena} style={{ width: '26.458vw', height: '17.63vw' }} alt="arena" />
                    <div style={{ width: '26.458vw', height: '17.63vw', backgroundColor: 'black', display:'flex', flexDirection:'column' }}>
                        <img src={marketplace} style={{ width: '26.458vw', height: '14.117vw' }} alt="marketplace" />
                        <div style={{ height:'3.529vw',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                            <p style={{ color: 'white', textAlign: 'center', fontFamily: 'DinPROBold', fontSize: '1.563vw' }}>Marketplace</p>
                        </div>

                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' , width:  '26.458vw',marginTop:'2.778vw', height:'37.5vw', backgroundColor:'black'}}>
                    
                    <img style={{ width: '26.48vw', height: '33.971vw' }} src={bestcity} alt="bestcity" />
                    <div style={{ height:'3.529vw',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>

                    <p style={{ color: 'white', textAlign: 'center', fontFamily: 'DinPROBold', fontSize: '1.563vw' }}>BestCity</p>
                </div>
                </div>
               <img src={casellaRanking} style={{width:'24.097vw', height:'37.5vw',marginTop:'2.778vw'}} />
            </div>
        </div>
    )
}

export default DappDashboard