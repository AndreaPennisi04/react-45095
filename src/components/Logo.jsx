import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import logoImage from "./logo/sailor-Moon-Logo1.webp";

const Logo = () => {
  return (
    <Box>
      <Link to={"/"}>
        <img src={logoImage} alt={"Logo Principal"} title="Sailor Moon" height={"100%"} />
      </Link>
    </Box>
  );
};
export default Logo;
