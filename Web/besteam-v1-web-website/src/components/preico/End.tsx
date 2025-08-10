import React, { useState, useEffect } from "react";

const End = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  var countDownDate = new Date("Jun 6, 2022 18:00:00").getTime();
  useEffect(() => {
    setInterval(function () {
      var now = new Date().getTime();
      var timeleft = countDownDate - now;
      var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      setDays(days);
      var hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hours);
      var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(minutes);
      var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
      setSeconds(seconds);
    }, 1000);
  });

  return (
    <>
      <div
        className="end"
        style={{
          width: "100%",
          height: "70px",
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontFamily: "Bonn", color: "#ffffff", fontSize: "30px" }}>
          ICO ends JUNE 6th{" "}
        </p>
        <div
          style={{
            display: "flex",
            width: "20vw",
            marginLeft: "1vw",
            backgroundColor: "#ffffff",
            color: "#000000",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            height: "50px",
          }}
        >
          <p
            style={{
              fontSize: "40px",
              marginTop: 0,
              marginBottom: 0,
              padding: 0,
              fontFamily: "Bonn",
            }}
          >
            0<span style={{ fontSize: 20, color: "rgb(45, 198, 83)" }}>d </span>
            0<span style={{ fontSize: 20, color: "rgb(45, 198, 83)" }}>h </span>
            0<span style={{ fontSize: 20, color: "rgb(45, 198, 83)" }}>m </span>
            0<span style={{ fontSize: 20, color: "rgb(45, 198, 83)" }}>s </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default End;
