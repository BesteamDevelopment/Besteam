import React, { useEffect, useState } from 'react'    
import { Link } from 'react-router-dom'


const PreicoDesktop = () => {
 
    const [days2, setDays2] = useState(0)
    const [hours2, setHours2] = useState(0)
    const [minutes2,setMinutes2] = useState(0)
    const [seconds2,setSeconds2] = useState(0)
    var countDownDate2 = new Date("Feb 26, 2022 18:00:00").getTime();



    useEffect(()=>{
        
        setInterval(function () {
            var now = new Date().getTime();
            var timeleft = countDownDate2 - now;
            var days2 = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            setDays2(days2)
            var hours2 = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours2(hours2)
            var minutes2 = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes2(minutes2)
            var seconds2 = Math.floor((timeleft % (1000 * 60)) / 1000);
            setSeconds2(seconds2)

        }, 1000);

       

    })
    return(
         <div style={{ display: 'flex', flexDirection: 'row', marginTop:50, marginBottom:50 , width:'100%', alignItems:'center'}}>
                <div style={{ display: 'flex', justifyContent:'center',flexDirection: 'row', padding:0}}>

                     <div style={{display:'flex', flexDirection: 'column', textAlign: 'right'}}>
                            <p style={{fontSize:'13px', fontStyle: 'italic'}}>NFT Besteam</p>
                            <p style={{color:'rgb(45, 198, 83)',fontStyle: 'italic', fontWeight: 'bold',marginTop:(-15)}}> MINT 1</p>
                            <p style={{fontSize:'8px', fontStyle: 'italic', marginTop:(-20)}}>FEBRUARY 01</p>
                     </div>
                     <div style={{display:'flex',width:'20vw', marginLeft:'1vw' ,backgroundColor:'#ffffff', color:'#000000', alignContent:'center', alignItems: 'center', justifyContent:'center', height: '70px'}}>
                     <a href="https://opensea.io/collection/besteam"><p style={{fontSize:'40px', marginTop:0,marginBottom:0,padding:0,fontFamily:'Bonn'}}>CLICK HERE!</p></a>
                     </div>
                </div>

                 <div style={{ display: 'flex', flexDirection: 'row', marginLeft:50}}>

                 <div style={{display:'flex', flexDirection: 'column', textAlign: 'right'}}>
                     
                            <p style={{fontSize:'13px', fontStyle: 'italic'}}>BTEM TOKEN</p>
                            <p style={{color:'rgb(45, 198, 83)',fontStyle: 'italic', fontWeight:'bold',marginTop:(-15)}}> ICO</p>
                            <p style={{fontSize:'8px', fontStyle: 'italic', marginTop:(-20)}}>MARCH</p>
                     </div>
                     <div style={{display:'flex',width:'20vw', marginLeft:'1vw' ,backgroundColor:'#ffffff', color:'#000000', alignContent:'center', alignItems: 'center', justifyContent:'center', height: '70px'}}>
                     <Link to='/ico'><p style={{fontSize:'40px', marginTop:0,marginBottom:0,padding:0,fontFamily:'Bonn'}}>CLICK HERE!</p></Link>
                    </div>
                 </div>
            </div>
    
    )
}

export default PreicoDesktop