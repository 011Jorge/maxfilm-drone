import Navbar from "../../components/Navbar";
import { ContainerHome, ContainerAds } from "./homeStyles";

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
    </ContainerHome>
  );
}

export default Home;
