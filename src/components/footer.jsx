import LogoFooter from "./logo/logo-footer.png";
import linkedin from "../imagenes/linkedin.svg";
import github from "../imagenes/github.svg";
import smallMoon from "./logo/bow.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-danger-subtle p-5">
      <div className="row">
        <div className="col text-md-center">
          <img src={LogoFooter} alt="Serenity" width="100vw" />
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <a href={"/https://www.linkedin.com/in/apennisi/"} className="ms-3 ">
            <img src={linkedin} alt={"linkedin"} width={"24"} />
          </a>
          <a href={"https://github.com/AndreaPennisi04"} className="ms-3 ">
            <img src={github} alt={"github"} width={"24"} />
          </a>
        </div>
      </div>
      <hr />
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col text-">
            <p>Make your dreams come true</p>
          </div>
          <div className="col-md-4 text-end">
            <p>
              <img src={smallMoon} alt="goldHeart" width={80} />
              Andrea Pennisi - Project React
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
