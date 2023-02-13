import LogoFooter from "./logo/Moon-stick.png";
import smallMoon from "./logo/bow.png";
import { Button, Divider, Grid, IconButton, Typography } from "@mui/material";
import { pink } from "@mui/material/colors";
import { GitHub, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Grid container spacing={2} sx={{ backgroundColor: pink[100], padding: 4 }}>
      <Grid item xs={12} sx={{ textAlign: "center" }}>
        <img src={LogoFooter} alt="Serenity" width="70vw" />
      </Grid>
      <Grid item xs={12}>
        <IconButton
          aria-label="LinkedIn"
          color="primary"
          onClick={() => {
            window.open("https://www.linkedin.com/in/apennisi/", "blank");
          }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          aria-label="Github"
          color="primary"
          onClick={() => {
            window.open("https://github.com/AndreaPennisi04", "blank");
          }}
        >
          <GitHub />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", alignContent: "center" }}>
        <Typography>
          Make your dreams come true.
          <Button variant="text">Contact us</Button>
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{ display: "flex", alignContent: "center" }}>
        <Typography>
          <img src={smallMoon} alt="goldHeart" width={80} />
          Andrea Pennisi - React Project
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
