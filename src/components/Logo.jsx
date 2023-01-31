import logoImage from "./logo/sailor-Moon-Logo1.webp";

const Logo = () => {
  return (
    <a href="/">
      <img src={logoImage} alt={"Logo Principal"} title="Sailor Moon" width={250} />
      <button className="navbar-toggler" type="button">
        <span className="navbar-toggler-icon"></span>
      </button>
    </a>
  );
};
export default Logo;
