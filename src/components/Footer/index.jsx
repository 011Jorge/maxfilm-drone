import Logo from "../../assets/logo-maxifilm.png";
import { ContainerFooter } from "./footerStyles";

function Footer() {
  return (
    <ContainerFooter>
      <div>
        <img src={Logo} alt="logo-maxifil" />
      </div>
    </ContainerFooter>
  );
}

export default Footer;
