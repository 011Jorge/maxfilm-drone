import Logo from "../../assets/logo-maxifilm.png";
import { ContainerNavbar, ContainerLogo } from "./navbarStyles";

function Navbar() {
  return (
    <ContainerNavbar>
      <ContainerLogo>
        <img src={Logo} alt="logo-clp" />
      </ContainerLogo>
      {/* <ContainerLink>
        <a href="#">Quem Somos?</a>|<a href="#">Contratar</a>|<a href="#"></a>|
        <a href="#">Anunciar</a>|
      </ContainerLink> */}
    </ContainerNavbar>
  );
}

export default Navbar;
