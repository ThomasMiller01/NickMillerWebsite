import React from "react";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import AspectRatio from "@mui/joy/AspectRatio";
import Divider from "@mui/material/Divider";

import use3dprintingController from "./controller";

import "./style.scss";

const PrintingView = () => {
  const { prints } = use3dprintingController();

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
