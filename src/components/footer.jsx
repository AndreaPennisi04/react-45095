import LogoFooter from "./logo/logo-serenity.png";
import linkedin from "../imagenes/linkedin.svg";
import github from "../imagenes/github.svg";

const Footer = () => {
  return (
    <div className="container-fluid bg-danger-subtle">
      <div className="row">
        <div className="col text-md-center">
          <img src={LogoFooter} alt="Serenity" width="100vw" />
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <a href={"/https://www.linkedin.com/in/apennisi/"} className="ms-3">
            <img src={linkedin} alt={"linkedin"} width={"24"} />
          </a>
          <a href={"https://github.com/AndreaPennisi04"} className="ms-3">
            <img src={github} alt={"github"} width={"24"} />
          </a>
        </div>
      </div>
      <hr />
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col">
            <p>Make your dreams come true</p>
          </div>
        </div>
        <div className="col text-end">
          <p className="me-3">Make your dreams come true</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
