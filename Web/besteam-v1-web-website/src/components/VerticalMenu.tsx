import React from 'react'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';




const VerticalMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div style={{backgroundColor:'#1c1c1c'}}>
        <span
        
        style={{backgroundColor:'#1c1c1c'}}
          id="basic-button"
          
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >

        </span>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'color':'#1c1c1c',
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem style={{ backgroundColor:'#1c1c1c', color:'#ffffff'}} onClick={handleClose}><a className="testo" href="https://www.instagram.com/besteam.io/">Instagram</a></MenuItem>
          <MenuItem style={{backgroundColor:'#1c1c1c', color:'#ffffff'}} onClick={handleClose}><a className="testo" href="https://t.me/besteam_io">Telegram</a></MenuItem>
          <MenuItem style={{ backgroundColor:'#1c1c1c', color:'#ffffff'}} onClick={handleClose}><a className="testo" href="https://twitter.com/BesTeam_io">Twitter</a></MenuItem>
         <MenuItem style={{ backgroundColor:'#1c1c1c', color:'#ffffff'}} onClick={handleClose}><a className="testo" href="https://discord.gg/besteam">Discord</a></MenuItem>
         <hr className="linea-bianca" />
          </Menu>
      </div>
    );
  }


export default VerticalMenu