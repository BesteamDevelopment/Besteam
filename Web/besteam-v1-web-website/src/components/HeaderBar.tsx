import { Button } from "@mui/material";
import React from "react";
import Logo from "../components/video/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import VerticalMenu from "./VerticalMenu";
import HamburgerMenu from "./HamburgerMenu";
import WhitePaper from "../Screens/WhitePaper";
import HomePage from "../Screens/HomePage";
import VerticalMenu2 from "../components/VerticalMenu2";
import ConnectionWallet from "./ConnectionWallet";
import Dashboard from "./Dashboard.tsx/Dashboard";
import Preico from "../components/preico/Preico";
import { Iscrizione } from "../dappNew/Iscrizione";
import { Sesso } from "../dappNew/Sesso";
import { CreazioneClub } from "../dappNew/CreazioneClub";
import { Home } from "../dappNew/Home";
import { BtemSwap } from "../Screens/btemSwap";
import { DappDashboard } from "../dappNew/Dashboard";
import HomeTikTok from "./tiktokagency/HomeTikTokAgency";
import VerifyPage from "../communityCup/VerifyPage";
import Blog from "../blog/Blog";
import Test from "../blog/articoli/Test";

const goToRegister = () => {
  document.body.scrollTop = 10000; // For Safari
  document.documentElement.scrollTop = 10000;
};

const HeaderBar = () => {
  return (
    <>
      <Router>
        <div className="navbar-header" style={{ zIndex: "1000000" }}>
          <div className="title">
            <Link
              onClick={() => {
                document.documentElement.scrollTop = 0;
              }}
              to="/#home"
              style={{ textDecoration: "none" }}
            >
              {" "}
              <img src={Logo} alt="Logo" className="image-logo" />
            </Link>
          </div>

          <div className="right-navbar">
            <a
              href="https://besteam.gitbook.io/besteam-whitepaper/"
              style={{ textDecoration: "none" }}
            >
              <p className="testo">WhitePaper</p>
            </a>
            {/*
            <Link to="/ico" style={{ textDecoration: "none" }}>
              <p className="testo">ICO</p>
  </Link>*/}

            <a
              href="https://besteam.io/#team"
              style={{ textDecoration: "none" }}
            >
              <p className="testo">Team</p>
            </a>

            <VerticalMenu2 />
            {/*
            <Button
              style={{
                marginLeft: 10,
                backgroundColor: "rgb(45, 198, 83)",
                width: 130,
                height: 50,
                fontWeight: "bold",
                fontSize: 20,
                color: "#ffffff",
                fontFamily: "Bonn",
                borderRadius: 0,
              }}
              className="button-register"
              onClick={() => goToRegister()}
            >
              JOIN
            </Button>
            */}
            <VerticalMenu />
            <a
              href="/supportus"
              style={{ textDecoration: "none", marginLeft: "-0.6vw" }}
            >
              <p className="testo">SupportUS</p>
            </a>
            <a
              href="/blog"
              style={{ textDecoration: "none", marginLeft: "-0.6vw" }}
            >
              <p className="testo">Blog</p>
            </a>

            <div className="wallet">
              <ConnectionWallet />
            </div>
          </div>
          <div className="hamburger">
            <HamburgerMenu />
          </div>
        </div>
        <Routes>
          <Route path="/whitepaper" element={<WhitePaper />} />
          <Route path="/verify" element={<VerifyPage />}/>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/*<Route path="/ico" element={<Preico />} />*/}
          <Route path="/dapp" element={<Iscrizione />} />
          <Route path="/sesso" element={<Sesso />} />
          <Route path="/creazioneclub" element={<CreazioneClub />} />
          <Route path="/home" element={<Home />} />
          <Route path="/supportus" element={<BtemSwap />} />
          <Route path="/dapp/creaclub" element={<CreazioneClub />} />
          <Route path="/dapp/dashboard" element={<DappDashboard />} />
          <Route path="/tiktokagency" element={<HomeTikTok/>} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/articolo-test" element={<Test/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default HeaderBar;
