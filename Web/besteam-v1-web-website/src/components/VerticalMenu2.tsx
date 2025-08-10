import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const VerticalMenu2 = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ backgroundColor: "#1c1c1c" }}>
      <span
        style={{ backgroundColor: "#1c1c1c" }}
        id="basic-button"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <a
          href="https://opensea.io/collection/besteam-collection"
          target={"_blank"}
          style={{ textDecoration: "none" }}
        >
          <p className="testo">NFTs</p>
        </a>
      </span>
      {/* <Menu
        sx={{
          marginTop: "27px",
          zIndex: "1",
          borderRadius: "0px",
        }}
        PaperProps={{
          style: {
            borderRadius: "0px",
          },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          style={{ backgroundColor: "#1c1c1c", color: "#ffffff" }}
          onClick={handleClose}
        >
          <a href="https://opensea.io/collection/besteam">
            <p className="testo">Opensea</p>
          </a>
        </MenuItem>
        <MenuItem
          style={{ backgroundColor: "#1c1c1c", color: "#ffffff" }}
          onClick={handleClose}
        >
          <p className="testo">Marketplace</p>
        </MenuItem>
      </Menu>*/}
    </div>
  );
};

export default VerticalMenu2;
