import { Menu, MenuItem } from '@mui/material'
import { InputLabel, ListSubheader } from '@mui/material'
import React, { useRef, useState } from 'react'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl'


const SelectBoxCustom = ({list,role,setNationality,nationality}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuRef = useRef(null);

    const cambiaValore = (item)=>{
      setNationality(item)
      chiudiMenu()
    }

    const chiudiMenu = () =>{
      const test = menuRef.current as any
      test.style.display='none';
      console.log(menuRef.current)
    }
    const handleChange =(e)=>{ 
        setNationality(e.target.value)
    }

    return(
    <FormControl >
      <Select
      
        style={{ width:role? '12.5vw': '27.08vw', height:'1.727vw',backgroundColor:'white',border :'1px solid green', borderRadius:'0px'}}
        labelId="search-select-label"
        id="select"
        value={nationality}
        sx={{
          border:'0.75px solid #2DC653!important' ,
          width: '25.85vw',
          height: '1.727vw',
          fontFamily: 'DIN-Pro',
          color:'#7C7C7C',
          backgroundColor:'#ffffff',
          textAlign:'center',
          fontSize: '1.05vw',
          padding:'0px',
          '.MuiList-root.MuiList-padding': {
            backgroundColor: 'white',
            padding: 0 /* Set the padding to 0 or your desired value */
          },
          '.MuiMenu-list':{
            backgroundColor:'#ffffff',
          }
        
        }}
        onChange={handleChange}
        renderValue={(nationality) => `${nationality}`}
        >
          <ListSubheader  sx={{ backgroundColor: '#ffffff', padding:'0px' }} style={{backgroundColor:'white', height:'8.5vw'}} id="elementi-label" ref={menuRef}>

        {
            list.map((item)=>{
                return(
                <MenuItem dense sx={{ backgroundColor: 'white',
                  marginLeft:'0.5vw',
                  fontFamily: 'DIN-Pro',
                  color:'#7C7C7C',
                  textAlign:'center',
                  fontSize: '0.90vw',
                  padding:'0px',
                  
                
                }} onClick={()=>cambiaValore(item)} value={item}>{item}</MenuItem>
                )
                
            })
        }
        </ListSubheader>
       
        <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={chiudiMenu}
        MenuListProps={{
          'aria-labelledby': 'elementi-label',
        }}
        sx={{
          backgroundColor:'white'
        }}
      />
       
      </Select>
     
    </FormControl>

)
}

export default SelectBoxCustom