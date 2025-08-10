import React, { useEffect, useState } from 'react'
import communitybackground from './sfondoCommunity.jpeg'
import { BloccoTesto, ButtonVerify, SpanTesto } from './VerifyPageStyled'




const VerifyPage = () => {
    const [verified, setVerified] = useState(false)
    useEffect(() => {
        const headerTop = document.getElementsByClassName("navbar-header") as unknown as HTMLElement[];
        const footer = document.getElementsByClassName("iub__us-widget") as unknown as HTMLElement[];

        if (headerTop.length > 0) {
            headerTop[0].style.display = 'none';
        }

        if (footer.length > 0) {
            footer[0].style.display = 'none';
        }
    }, []);
    const verifyUser = () => {
        setVerified(true)
    }

    useEffect(() => {
        console.log(verified)
    }, [verified])
    return (
        <div
            style={{
                backgroundImage: `url(${communitybackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white' // Modifica il colore del testo se necessario
            }}
        >
            <div style={{ display: 'flex', gap: '1.5rem', flexDirection: 'column', marginTop: '70px', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}}>
                {!verified && (
                    <>
                        <ButtonVerify onClick={()=>verifyUser()}>
                            <p>VERIFY</p>
                        </ButtonVerify>
              
                        <BloccoTesto>
                            By clicking Verify,
                            you accept the <SpanTesto><a href="/BesteamPrivacyPolicy.pdf" download="PrivacyPolicyBesteam" target='_blank' >Privacy Policy</a></SpanTesto>
                        </BloccoTesto>
                    </>

                )}
                {verified && (
                    <>
                        <ButtonVerify>
                            <a href="https://discord.gg/besteam">
                            <p>NEXT</p>
                            </a>
                        </ButtonVerify>
                        <SpanTesto>Verify completed<br/>
                            Join Community Cup!</SpanTesto>

                    </>

                )}
            </div>


        </div>
    );
};

export default VerifyPage;


