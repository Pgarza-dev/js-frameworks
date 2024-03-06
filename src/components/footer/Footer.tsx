import { BsGithub, BsLinkedin, BsGoogle } from "react-icons/bs";
import Container from "../container/Container";
import Logo from "../logo/Logo";

const Footer = () => {
  return (
    <div className="w-full bg-lightModeText text-lightModeSecondary">
      <Container className="grid grid-col-1 md:grid-col-2 lg:grid-col-4 gap-10">
        <div className="flex flex-col gap-y-4">
          <Logo />
          <div>
            <a href="https://github.com/Pgarza-dev" target="_blank">
              <span className="socialIcons">
                <BsGithub />
              </span>
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/pablo-garza-4a897762/"
              target="_blank">
              <span className="socialIcons">
                <BsLinkedin />
              </span>
            </a>
          </div>
          <div>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
              <span className="socialIcons">
                <BsGoogle />
              </span>
            </a>
          </div>

          <span>&copy; {new Date().getFullYear()} Pablo Garza.</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
