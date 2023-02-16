import { Alert, AlertTitle, Box } from "@mui/material";

export const NotFound = () => (
  <Box display="flex" justifyContent="center" alignItems="center" height={200}>
    <Alert severity="error">
      <AlertTitle>What are you doing here?</AlertTitle>
      This is not the site you are looking for. ERROR 404.
    </Alert>
  </Box>
);
