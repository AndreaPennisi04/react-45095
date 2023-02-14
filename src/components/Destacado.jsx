import { getImagePath } from "../util/getImagePath";
import Header from "./Header";

const Destacado = () => {
  return (
    <div className="container-fluid p-0">
      <div
        style={{
          backgroundImage: `url(${getImagePath("portada2.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100vh",
        }}
      >
        <Header />
      </div>
    </div>
  );
};
export default Destacado;
