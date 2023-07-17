import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {
  ContainerHome,
  ContainerAds,
  ContainerAbout,
  ContainerServices,
} from "./homeStyles";

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
      <ContainerAbout>
        <div>
          <h1>Quem Somos?</h1>
          <h3>
            <span style={{ fontWeight: 500 }}>MaxiFilm Productions</span> é mais
            que uma produtora de conteúdo, somos a solução de filmagens no
            Brasil. <br /> Com criatividade sua live, filme, fotografia pode se
            tornar uma super produção.
          </h3>

          <button>Contate-nos</button>
        </div>
      </ContainerAbout>
      <ContainerServices>
        <h1>O que oferecemos para você</h1>
        <div className="divServices">
          <div className="services"></div>
          <div className="services"></div>
          <div className="services"></div>
        </div>
      </ContainerServices>
      <Footer />
    </ContainerHome>
  );
}

export default Home;
