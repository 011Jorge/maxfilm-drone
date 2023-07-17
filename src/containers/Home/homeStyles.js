import styled from "styled-components";
import Background from "../../assets/background.jpg";
import BackgroundAbout from "../../assets/backgroundAbout.jpg";

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

export const ContainerAbout = styled.div`
  height: 100vh;
  background-image: url(${BackgroundAbout});
  background-position: 20em;

  div {
    padding-top: 300px;
    margin-left: 50px;
  }

  h1 {
    font-size: 50px;
    font-weight: 900;
    color: #fff;
  }

  h3 {
    color: #fff;
    font-size: 30px;
    font-weight: 300;
    margin-top: 20px;
    width: 700px;
  }

  button {
    margin-top: 50px;
    width: 200px;
    height: 50px;

    font-size: 18px;
    font-weight: 500;

    border-radius: 8px;
    border: 1px solid #fff;
    color: #fff;

    cursor: pointer;

    background: purple;
    opacity: 0.6;
  }
`;

export const ContainerServices = styled.div`
  height: 100vh;
  background-color: #010511;

  h1 {
    text-align: center;
    font-size: 50px;
    padding: 30px;

    color: #fff;
  }

  .divServices {
    display: flex;
    justify-content: center;
    align-items: center;

    .services {
      width: 500px;
      height: 500px;

      margin: 20px;

      border-radius: 18px;
      background-color: gray;
    }
  }
`;
