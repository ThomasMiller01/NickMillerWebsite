import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import Divider from "@mui/material/Divider";

import "./style.scss";

const PrintingView = () => {
  const prints = [
    {
      title: "Arduino Uno Case",
      link: "https://www.printables.com/de/model/305285-arduino-uno-case",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000003-6747067473/Arduino_Case_2022-Jul-21_12-59-07PM-000_CustomizedView25047119405_png.webp?ph=01a6e5d8d4",
    },
    {
      title: "Magnet Tür Sensor",
      link: "",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000114-19fef19ff3/11527a21-941b-45b1-be59-20005ddd08c2.webp?ph=01a6e5d8d4",
    },
    {
      title: "Shimano Zee Bremsen",
      link: "https://www.printables.com/de/model/306387-shimano-zee-brake-lever",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000006-9e0269e028/Unbenannt_2022-Jul-21_02-41-30PM-000_CustomizedView2745109712_png.webp?ph=01a6e5d8d4",
    },
    {
      title: "Wetterstation",
      link: "",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000008-367cc367d0/Wetterstation_2022-Jul-21_11-12-44AM-000_CustomizedView1531587654_png.webp?ph=01a6e5d8d4",
    },
    {
      title: "Servo Lichtschalter",
      link: "https://www.printables.com/de/model/305292-servo-light-switch",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000115-91d2391d25/Capture-1.webp?ph=01a6e5d8d4",
    },
    {
      title: "Handy Halterung",
      link: "https://www.printables.com/de/model/305288-phone-holder",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000133-00cf000cf3/HandyHalterung_2022-Jul-21_12-43-47PM-000_CustomizedView9886025552_png.webp?ph=01a6e5d8d4",
    },
    {
      title: "Stream-Deck",
      link: "",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000143-8dd638dd67/1-7.webp?ph=01a6e5d8d4",
    },
    {
      title: "Spielfiguren",
      link: "https://cults3d.com/de/modell-3d/spiel/wuerfel-und-spielfiguren",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000116-6505465058/1.webp?ph=01a6e5d8d4",
    },
    {
      title: "Jet Turbine",
      link: "",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000117-d425ad425e/2.webp?ph=01a6e5d8d4",
    },
    {
      title: "Wandhaken",
      link: "https://cults3d.com/de/modell-3d/haus/wandhaken-gladiator_np",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000118-d0668d066b/1-3.webp?ph=01a6e5d8d4",
    },
    {
      title: "Türhaken",
      link: "https://www.printables.com/de/model/305270-u-hook",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000119-8ac788ac7b/5-9.webp?ph=01a6e5d8d4",
    },
    {
      title: "M4 VR Guckstock",
      link: "/projekte/m4-vr-gunstock",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000042-593de593e1/image_2022-12-20_193538193.webp?ph=01a6e5d8d4",
    },
    {
      title: "Mondraker-Mudguard",
      link: "",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000165-587e0587e3/1-5.webp?ph=01a6e5d8d4",
    },
    {
      title: "ESP8266 Deauthr",
      link: "/projekte/esp8266-deauthr",
      image:
        "https://01a6e5d8d4.cbaul-cdnwnd.com/5cf4d7c74bc6ac946db91b3cb9413f37/200000185-95bcb95bce/1-1.webp?ph=01a6e5d8d4",
    },
  ];

  return (
    <div className="printing-view">
      <div className="title">3D-Prints</div>
      <div>
        <Box sx={{ flexGrow: 1 }} className="prints">
          <Grid container spacing={5}>
            {prints.map((print, index) => (
              <React.Fragment key={index}>
                {index !== 0 && index % 3 === 0 && (
                  <Grid xs={12}>
                    <Divider />
                  </Grid>
                )}
                <PrintView {...print} />
              </React.Fragment>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
};

const PrintView = ({ title, link, image }) => {
  return (
    <Grid xs={12} md={6} lg={4} className="print">
      <AspectRatio ratio="1/1">
        <div>
          {link && (
            <NavLink to={link} className="container">
              {image && (
                <div
                  className="image"
                  style={{ backgroundImage: `url(${image})` }}
                />
              )}
            </NavLink>
          )}
          {!link && (
            <div className="container">
              {image && (
                <div
                  className="image"
                  style={{ backgroundImage: `url(${image})` }}
                />
              )}
            </div>
          )}
        </div>
        <div className="text">
          <div className="title">{title}</div>
        </div>
        <div className="background" />
      </AspectRatio>
    </Grid>
  );
};

export default PrintingView;
