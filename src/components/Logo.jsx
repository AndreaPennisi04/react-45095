import { Box } from "@mui/material";
import logoImage from "./logo/sailor-Moon-Logo1.webp";

const Logo = () => {
  return (
    <Box>
      <a href="/">
        <img src={logoImage} alt={"Logo Principal"} title="Sailor Moon" height={"100%"} />
      </a>
    </Box>
  );
};
export default Logo;
