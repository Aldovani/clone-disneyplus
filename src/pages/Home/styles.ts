import styled from "styled-components";

export const Container = styled.main`
  margin: 8.875rem 2.5rem;
  color: #f9f9f9;
  @media (max-width: 400px) {
    margin: 8.875rem 1.25rem;
  }
`;

export const ContainerMeta = styled.section`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > span {
    color: ${(props) => props.theme.colors.tertiary};
    opacity: 0.8;
    font-size: 12px;
    margin: 12px 0 25px;
  }

  .link {
    color: #f9f9f9;
    font-size: 17.6px;
  }
  .price {
    font-size: 17.6px;
    color: #c0c0c0;
    opacity: 0.8;
  }

  @media (max-width: 1000px) {
    margin: 37vh auto 0;
  }
`;

export const Image = styled.img`
  height: auto;
  width: 350px;
  margin: 20px 0 24px;
  @media (max-width: 400px) {
    width: 250px;
  }
`;
export const SubTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  line-height: 24px;
  padding: 0 4.5rem;
  @media (max-width: 400px) {
    padding: 0;
  }
`;

export const ContainerDevices = styled.section`
  margin-top: 130px;
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 2rem;
  h2 {
    font-size: 34px;
    margin-bottom: 24px;
  }
  p {
    margin-bottom: 24px;
    font-size: 18px;
    color: #c0c0c0;
    opacity: 0.8;
    line-height: 27px;
    max-width: 95%;
  }
  img {
    width: 50%;
    height: auto;
  }
  @media (max-width: 1000px) {
    margin: 200px auto 0;
  }
  @media (max-width: 650px) {
    flex-direction: column-reverse;
    div {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      display: flex;
    }
    img {
      width: 100%;
    }
  }
`;
export const ContainerOriginal = styled.section`
  margin-top: 160px;
  text-align: center;

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 24px;
  }
  h2 {
    font-size: 34px;
  }
  p {
    padding: 0 2rem;
    margin: 24px 0;
    font-size: 18px;
    color: #c0c0c0;
    opacity: 0.8;
  }
  img {
    width: 100%;
    border-radius: 8px;
  }
  @media (max-width: 1000px) {
    /* margin: 100px auto 0; */
  }

  @media (max-width: 650px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
export const ContainerDownload = styled.section`
  margin-top: 120px;
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  justify-content: center;
  position: relative;
  width: 100%;

  .download {
    width: 40%;
    top: 50%;
    transform: translateY(-50%);
    left: 52%;
    position: absolute;
  }
  h2 {
    font-size: 34px;
    margin-bottom: 24px;
  }
  p {
    font-size: 18px;
    color: #c0c0c0;
    opacity: 0.8;
  }
  .downloadMd {
    display: none;
  }
  @media (max-width: 750px) {
    .download {
      transform: translateY(0);
      position: static;
      width: 100%;
      text-align: center;
    }
    .downloadMd {
      display: block;
    }
    .downloadG {
      display: none;
    }
  }
`;
export const ContainerDevice = styled.section`
  text-align: center;
  margin-top: 120px;
  h2 {
    font-size: 34px;
    margin-bottom: 36px;
  }
`;
export const Devices = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(1, 1fr);
  grid-column-gap: 0px;
  justify-content: center;
  grid-row-gap: 0px;
  width: 100%;
  text-align: center;
  img {
    width: 100%;
  }
  h3 {
    font-size: 22px;
    margin: 24px 0;
  }
  p {
    color: #c0c0c0;
    opacity: 0.8;
    font-size: 18px;
    margin-bottom: 4px;
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const BannerDownLoad = styled.img`
  height: auto;
  width: 100%;
`;

export const Footer = styled.footer`
  img {
    width: 100px;
    height: auto;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex-direction: column;
  padding-bottom: 2rem;
`;

export const Flex = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c0c0c0;
  opacity: 0.8;
  flex-wrap: wrap;
  gap: 30px;
  text-align: center;
  max-width: 85%;
`;
