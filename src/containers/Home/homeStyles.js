import styled from "styled-components";
import Background from "../../assets/background.jpg";

export const ContainerHome = styled.div``;

export const ContainerAds = styled.div`
  width: 100%;
  height: 90vh;

  background-image: url(${Background});
  background-size: 100%;
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    text-align: center;

    width: 1000px;
    padding: 50px;

    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    border-radius: 10px;

    h1 {
      font-size: 50px;
      color: #fff;
    }
  }
`;

export const ContainerServices = styled.div`
  height: 100vh;

  h1 {
    text-align: center;
    font-size: 50px;
  }
`;
