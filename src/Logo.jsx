import logoImage from "./imagenes/logo/sailor-Moon-Logo1.webp";

const Logo = () => {
  return (
    <a href="/">
      <img src={logoImage} alt={"Portada"} title="Sailor Moon" width={250} />
    </a>
  );
};
export default Logo;
