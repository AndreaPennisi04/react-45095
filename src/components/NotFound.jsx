import LogoFooter from "./logo/Moon-stick.png";
import { Alert, AlertTitle, Box, Typography, Grid, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = new useNavigate();
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} justifyContent="center" alignItems="center" height={200}>
          <Alert severity="error">
            <AlertTitle>What are you doing here?</AlertTitle>
            This is not the site you are looking for.
          </Alert>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center" fontSize={30}>
          <Typography gutterBottom variant="h3">
            Error 404!!.
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            onClick={() => {
              navigate("/");
            }}
          >
            <img src={LogoFooter} alt="Serenity" width="70vw" />
            <Grid item xs={12} sx={{ textAlign: "center" }}>
              Back to Home.
            </Grid>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
