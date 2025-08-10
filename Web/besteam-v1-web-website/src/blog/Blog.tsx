import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import card from './assets/MAXIcard.png';
import CardArticolo from './components/CardArticolo';
import NewsLetter from '../components/NewsLetter';
import frecciaright from './assets/frecciaright.png';

const ContainerBlack = styled.div`
  background-color: #1c1c1c;
  height: 100%;
`;

const SectionArticoli = styled.div`
  display: grid;
  gap: 45px; /* Spazio fisso tra le card */
  margin-top: 180px;
  place-items: center;
  max-width: 1200px; /* Impedisce che si allarghi troppo su schermi grandi */
  margin-left: auto;
  margin-right: auto;

  grid-template-columns: repeat(1, 1fr); /* Mobile */

  @media (min-width: 768px) { /* Tablet */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) { /* Desktop */
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Blog = () => {
  return (
    <ContainerBlack>
      <img src={card} style={{ marginTop: '116px', width: '100%', height: '480px' }} alt="Maxi Card" />
      
      <SectionArticoli>
        <CardArticolo />
        <CardArticolo />
        <CardArticolo />
        <CardArticolo />
        <CardArticolo />
        <CardArticolo />
        <CardArticolo />
        <CardArticolo />
        <CardArticolo />

      </SectionArticoli>

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
        <div style={{marginTop:'180px'}}>
      <NewsLetter />
      </div>
      <Footer />
    </ContainerBlack>
  );
};

export default Blog;
