import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { ContainerHome, ContainerAds, ContainerServices } from "./homeStyles";

function Home() {
  return (
    <ContainerHome>
      <Navbar />
      <ContainerAds>
        <div>
          <h1>
            Mais do que uma produtora de conteúdos, somos apaixonados por
            desafio.
          </h1>
        </div>
      </ContainerAds>
      <ContainerServices>
        <h1>Serviços</h1>
      </ContainerServices>
      <Footer />
    </ContainerHome>
  );
}

export default Home;
