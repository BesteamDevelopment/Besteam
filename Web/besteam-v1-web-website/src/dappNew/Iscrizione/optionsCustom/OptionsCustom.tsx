import React from 'react'
import { Radio, RadioGroup, FormControlLabel, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import CircleIcon from '@mui/icons-material/Circle';

import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";


const CustomRadioGroup = ({prima,seconda,terza,primovalore,secondovalore,terzovalore, platform,setPlatform}) => {
    const options = [
        { value:primovalore ,image: prima },
        { value:secondovalore, image: seconda },
        { value:terzovalore ,image: terza },
      ];

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  return (
    <div style={{display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center', flexDirection:'column', width:'100%'}} >
     
      <RadioGroup
        name="customRadioGroup"
        value={platform}
        style={{flexDirection:'row',justifyContent:'center', margin:'0px',justifyItems:'space-around',marginTop:'0.3vw',display:'flex', gap:'4rem'}}
        onChange={handleChange}
        
      >
        {options.map((option) => (
          <FormControlLabel
         
          
            key={option.value}
            value={option.value}
            
            control={<Radio
              icon={<CircleUnchecked style={{color:'white',fill:'white', backgroundColor:'white', padding:'0px', borderRadius:'50px', border:'none'}}/>}
              checkedIcon={<CircleIcon  style={{color:'#2DC653', backgroundColor:'white', padding:'0px', borderRadius:'50px'}}/>}
               sx={{ 
              fontSize:40,
              width:'1.8vw',
              height:'1.8vw',
              backgroundColor:'white',
              color:'white',
              border:'none',
              padding:'0.5vw'
              ,
              '&.Mui-checked:hover': {
                border:'white',
                color: '#2DC653',
                backgroundColor:'white'
              },}} />}
            label={
              <div>
                <img
                  src={option.image}
                  alt={option.value}
                  style={{  width: '4.5vw ', height: '1.08' , marginLeft:'-2vw'}}
                />
                
              </div>
            }
            labelPlacement="start"
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default CustomRadioGroup;
