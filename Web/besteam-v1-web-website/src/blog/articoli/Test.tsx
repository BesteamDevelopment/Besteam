import React, { useState } from 'react';
import styled from 'styled-components';
import besteamfirst from './media/test/besteamfirst.webp'
import manchestercity from './media/test/manchestercity.webp'
import NewsLetter from '../../components/NewsLetter';
import Footer from '../../components/Footer';
import ronaldinho from './media/test/ronaldinho.webp'
import seriea from './media/test/seriaa.webp'
import argentina from './media/test/argentina.webp'
import crociprima from '../../components/video/crociprima.png'
import CardArticolo from '../components/CardArticolo';
import frecciaright from '../assets/frecciaright.png';

// Styled Components


const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: black;
  color: #2ecc71;
  font-family: sans-serif;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  
  @media (min-width: 768px) {
    height: 400px;
  }
  
  @media (min-width: 1024px) {
    height: 500px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

const Title = styled.h1`
font-family: DINPro;
font-weight: 700;
font-size: 64px;

text-align: center;
vertical-align: middle;

 
  
  text-align: center;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
   
  }
  
  @media (min-width: 1024px) {
   
  }
`;

const AuthorDate = styled.div`
font-family: Dinproregular;
font-weight: 400;
font-size: 20px;

text-align: center;

  color: #BFBFBFBD;
  margin-top:72px;
  margin-bottom: 72px;
  
  @media (min-width: 768px) {
  
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 42px;
  margin-bottom: 2rem;
`;

const Category = styled.div`
  background-color: #333;
  color: #424242;
  font-size: 16px;
  padding: 0.25rem 1rem;
  border-radius: 16px;
  width:202px;
  height:41px;
  font-family: Dinproregular;
font-weight: 500;
font-size: 16px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
display:flex;
justify-content:center;
align-content:center;
align-items:center;
color:#ffffff

`;

const IntroText = styled.div`
  text-align: center;
  padding: 0 1rem 1.5rem;
  margin-top:42px;
  color: #ffffff;
  font-family: Dinproregular;
  margin-bottom:72px;
font-weight: 400;
font-size: 24px;
text-align: center;
vertical-align: middle;

  
  @media (min-width: 768px) {
  
    padding: 0 2rem 2rem;
  }
`;

const GreenText = styled.span`
  color: #2ecc71;
  font-weight: bold;
`;

// New components for the content sections
const MetaverseSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 450px; /* Altezza minima uguale per entrambe le sezioni */

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    align-items: stretch; /* Stessa altezza per le due sezioni */
  }
`;

const MetaverseImageContainer = styled.div`
  width: 618px;
  height: 442px;
  position: relative;
  
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const MetaverseContent = styled.div`
  padding: 1.5rem 1rem;
  text-align:left;
  
  @media (min-width: 768px) {
    width: 60%;
    padding: 1.5rem 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: DINPro;
font-weight: 700;
font-size: 36px;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;

  color: #2DC653;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
   
  }
`;

const SectionText = styled.p`
font-family: Dinproregular;
font-weight: 400;
font-size: 24px;
color:#ffffff;
vertical-align: middle;

  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
   
  }
`;

const Slide = styled.div`
  min-width: 100%;
  transition: opacity 0.5s ease-in-out;
`;

const BesteamSection = styled.div`
  display: flex;
  margin-top:72px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  min-height: 450px; /* Altezza minima uguale per entrambe le sezioni */

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
    align-items: stretch; /* Stessa altezza per le due sezioni */
  }
`;

const BesteamContent = styled.div`
  padding: 1.5rem 1rem;
  text-align:left;
  
  @media (min-width: 768px) {
    width: 50%;
    padding: 1.5rem 0;
  }
`;

const BesteamImageContainer = styled.div`
  width: 618px;
  height: 442px;
  position: relative;
  
  @media (min-width: 768px) {
   
  }
`;

// NEW Slider Components
const SliderContainer = styled.div`
  width: 1203px;
  height:384px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
`;

const SliderImage = styled.img`
  width: 100%;
  display: block;
`;


const SliderTextContainer = styled.div`
 font-family: Dinproregular;
font-weight: 400;
font-size: 24px;
line-height: 100%;
letter-spacing: 0%;
text-align: center;
vertical-align: middle;
color:#ffffff;
  
  @media (min-width: 768px) {
    padding: 2rem;
   font-size: 24px;;
  }
`;
const SliderWrapper = styled.div`
  display: flex;
  margin-top:105px;
  transition: transform 0.5s ease-in-out;
  transform: ${({ currentSlide }) => `translateX(-${currentSlide * 100}%)`};
`;

const SliderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 2;
  padding: 10px 15px;
  border-radius: 50%;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

const TitlePreArticoli = styled.p``

const LeftButton = styled(SliderButton)`
  left: 10px;
  margin-top:105px;
`;

const RightButton = styled(SliderButton)`
  right: 10px;
   margin-top:105px;
`;


const BlogPostCard = () => {
  // State for slider
  const images = [ronaldinho, argentina, seriea];

  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Function to go to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  return (
    <div style={{backgroundColor:'#1C1C1C'}}>
    <CardContainer>
      <ImageContainer>
        <Image 
          src={besteamfirst}
          alt="Calcio Virtuale nel Metaverso" 
        />
      </ImageContainer>
      
      <ContentContainer>
        <Title>
          What is the Football Metaverse?  <br />
        </Title>
        
        <AuthorDate>
          Besteam | 10/03/25
        </AuthorDate>
        
        <CategoriesContainer>
          <Category>Categoria</Category>
          <Category>Categoria</Category>
          <Category>Categoria</Category>
        </CategoriesContainer>
        
        {/* Testo introduttivo */}
        <IntroText>
          Over the past few years, the metaverse has been shaking up multiple industries—including football! But it's not just a cool tech trend; it's a game-changer for fans and clubs alike. So, what exactly is the football metaverse, and what makes it so exciting? Let's dive in!  
        </IntroText>
        
        {/* First section: A New Way to Experience Football */}
        <MetaverseSection>
          <MetaverseImageContainer>
            <Image 
              src={manchestercity} 
              alt="L'Innovazione del Calcio nel Metaverso" 
            />
          </MetaverseImageContainer>
          
          <MetaverseContent>
            <SectionTitle>A New Way to Experience Football</SectionTitle>
            <SectionText>
              The football metaverse is a virtual world where fans can connect with their favorite teams, enjoy immersive experiences, and actively engage in the game—without leaving home. Thanks to cutting-edge tech like Virtual Reality (VR), blockchain, and NFTs, football is stepping into a whole new dimension where physical limits disappear. Big clubs like Manchester City are already building their own metaverse stadiums, allowing fans to watch matches in an interactive digital space.
            </SectionText>
          </MetaverseContent>
        </MetaverseSection>
        
        {/* Second section: Play, Earn, and Socialize */}
        <BesteamSection>
          <BesteamContent>
            <SectionTitle>Play, Earn, and Socialize</SectionTitle>
            <SectionText>
              In the football metaverse, you're not just a spectator—you can play, compete, and even earn rewards in brand-new ways. Platforms like Besteam offer play-to-earn football simulations where you create a custom avatar, build your dream team, and join tournaments to win cryptocurrency prizes. Fans can also buy, sell, and trade digital assets like custom jerseys, virtual stadiums, and exclusive NFT collectibles, making the virtual football experience even more exciting.
            </SectionText>
          </BesteamContent>
          
          <BesteamImageContainer>
            <Image 
              src={besteamfirst}
              alt="BUILD YOUR BESTEAM" 
            />
          </BesteamImageContainer>
        </BesteamSection>
        
        {/* NEW BE THE FIRST Slider with text below */}
        <SliderContainer>
  <LeftButton onClick={prevSlide}>‹</LeftButton>
  <SliderWrapper currentSlide={currentSlide}>
    {images.map((img, index) => (
      <Slide key={index}>
        <SliderImage src={img} alt={`Slide ${index + 1}`} />
      </Slide>
    ))}
  </SliderWrapper>
  <RightButton onClick={nextSlide}>›</RightButton>
</SliderContainer>
        <SliderTextContainer style={{marginTop:'104px'}}>
        <SectionTitle>The Future of Football in the Metaverse  
</SectionTitle>
        The football metaverse isn’t just about gaming—it’s redefining what it means to be a fan. Clubs can unlock new revenue streams, players can interact directly with supporters, and matches could be broadcast in ways we’ve never seen before. In the near future, we might even see exclusive metaverse events, virtual press conferences, and AR-powered meet-and-greets with football stars. 
        </SliderTextContainer>
      </ContentContainer>
      <img src={crociprima} />
      <SliderTextContainer style={{marginTop:'104px',marginBottom:'104px'}}>
        
      The football metaverse is still in its early days, but it’s already changing the game. The combination of technology, digital economy, and pure football passion is creating something epic—making the sport more accessible, interactive, and immersive than ever.  
<br/>
Are you ready to step into the future of football?        </SliderTextContainer>
      <div style={{marginTop:'80px'}}>

        <div style={{width:'100%', height:'700px', display:'flex', flexDirection:'column', justifyContent:'center', alignContent:'center',alignItems:'center', backgroundColor:'#2d2d2d'}}>
            <Title style={{fontSize:'40px'}}>Articoli Correlati</Title>
            <div style={{display:'flex', flexDirection:'row',gap:'45px',marginTop:'78px'}}>
            <CardArticolo/>
            <CardArticolo/>
            <CardArticolo/>
            </div>
            <div className="paginationControls" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '55px' }}>
        {Array.from({ length: 3 }, (_, i) => (
          <button
            key={i}
            onClick={() => console.log('prova')}
            style={{ 
              fontWeight: '500', 
              color: 1 === i ? '#2DC653' : 'white', 
              fontFamily: 'DinPRO', 
              fontSize: '24px', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer' 
            }}
          >
            {i + 1}
          </button>
        ))}
        <button onClick={() => console.log('avanti')} disabled={false} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src={frecciaright} style={{ width: '18px', height: '25px' }} alt="Freccia Destra" />
        </button>
      </div>

        </div>
        <NewsLetter />
        <Footer />
      </div>
    </CardContainer>
    </div>
  );
};

export default BlogPostCard;