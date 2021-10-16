import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import ButtonBottom from "../../components/ButtonBottom";
import { Header } from "../../components/Header";
import { Banner } from "./Components/Banner";
import * as Com from "./styles";


const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Com.Container>
        <Banner />

        <Com.ContainerMeta>
          <Com.SubTitle>
            Com o Combo+, você pode aproveitar o Disney+ e o Star+ por um preço
            único.
          </Com.SubTitle>
          <Com.Image
            src="/original-1.png"
            alt="Combo Disney+ e Star+"
            title="Combo Disney+ e Star+"
          />
          <Button myClass="full blue">Assine Por R$ 45,90*</Button>
          <span>
            *O preço pode variar caso a assinatura seja feita através de outras
            plataformas.
          </span>
          <Link to="/home" className="link">
            Assinar somente o Disney+
          </Link>
          <p className="price">R$ 27,90/mês* ou R$ 279,90/ano à vista*</p>
        </Com.ContainerMeta>

        <Com.ContainerDevices>
          <div>
            <h2>Assista do seu jeito</h2>
            <p>
              Aproveite a tela grande da TV ou assista no tablet, laptop,
              celular e outros aparelhos. Nossa seleção de títulos em 4K não
              para de crescer. Além disso, para a felicidade de todos, é
              possível assistir em até 4 telas ao mesmo tempo.
            </p>
          </div>
          <img src="/devices.png" alt="" />
        </Com.ContainerDevices>

        <Com.ContainerOriginal>
          <h2>Originais Disney+ exclusivos</h2>
          <p>
            Só no Disney+ você vê os melhores filmes, séries, curtas e outros
            conteúdos inéditos.
          </p>
          <div>
            <img src="/Mandalorian.png" alt="1" />
            <img src="/damaVagabundo.jpg" alt="2" />
            <img src="/cloneWars.jpg" alt="3" />
            <img src="/forkyQuestion.jpg" alt="4" />
            <img src="/WandaVision.jpg" alt="5" />
            <img src="/soul.jpg" alt="6" />
            <img src="/RogueTrip.jpg" alt="7" />
            <img src="/phinFerb.jpg" alt="8" />
            <img src="/HSM.jpg" alt="9" />
          </div>
        </Com.ContainerOriginal>

        <Com.ContainerDownload>
          
          <Com.BannerDownLoad className="downloadG" src="/download.png" />
          <Com.BannerDownLoad className="downloadMd" src="/downloadMd.png" />
          <div className="download">
            <h2>Baixe filmes e séries</h2>
            <p>
              Baixe e assista quando e onde quiser. Assim, seus favoritos estão
              sempre com você, até mesmo sem internet.
            </p>
          </div>
        </Com.ContainerDownload>

        <Com.ContainerOriginal>
          <h2>Diversão sem limites</h2>
          <p>
            Descubra as melhores histórias da Disney, Pixar, Marvel, Star Wars e
            National Geographic em um só lugar. De sucessos de bilheteria até
            clássicos e novidades originais, temos opções para todos os gostos.
          </p>
          <div>
            <img src="/AvengersEndGame.jpg" alt="1" />
            <img src="/Mulan.jpg" alt="2" />
            <img src="/Violetta.jpg" alt="3" />
            <img src="/XMenWolverine.jpg" alt="4" />
            <img src="/Frozen2.jpg" alt="5" />
            <img src="/FreeSolo.png" alt="6" />
            <img src="/StarWars.jpg" alt="7" />
            <img src="/ToyStory4.jpg" alt="8" />
            <img src="/Onward.jpg" alt="9" />
          </div>
        </Com.ContainerOriginal>

        <Com.ContainerDevices>
          <div>
            <p>
              Só o Combo+ oferece Disney+ e Star+ juntos para você ter acesso
              ilimitado a filmes, séries de sucesso e esportes ao vivo com a
              ESPN, para ver onde e como quiser.
            </p>
            <Button myClass="blue md">Quero Assinar</Button>
          </div>
          <img src="/banner.jpg" alt="" />
        </Com.ContainerDevices>
        <Com.ContainerDevice>
          <h2>Disponível nos seus dispositivos favoritos</h2>

          <Com.Devices>
            <div>
              <img src="/tv.png" alt="" />
              <h3>TV</h3>
              <p>Amazon Fire TV</p>
              <p>Android TV</p>
              <p>Apple TV</p>
              <p>Chromecast</p>
              <p>TVs LG</p>
              <p>Roku</p>
              <p>Samsung</p>
            </div>
            <div>
              <img src="/computer.png" alt="" />
              <h3>Computador</h3>
              <p>Chrome OS</p>
              <p>MacOS</p>
              <p>PC Windows</p>
            </div>
            <div>
              <img src="/tablet.png" alt="" />
              <h3>Celulares e tablets</h3>
              <p>Tablets Amazon Fire</p>
              <p>Celulares e tablets Android</p>
              <p>iPhone e iPad</p>
            </div>

            <div>
              <img src="/consoles.png" alt="" />
              <h3>Videogames</h3>
              <p>PS4</p>
              <p>PS5</p>
              <p>Xbox One</p>
              <p>Xbox Series X</p>
              <p>Xbox Series S</p>
            </div>
          </Com.Devices>
        </Com.ContainerDevice>
      
        <ButtonBottom/>
      </Com.Container>
      
      <Com.Footer>
        <img
          src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
          alt="Logo Disney+"
        />
        <Com.Flex>
          <p>Centro de Assinatura</p>
          <p>Política de privacidade</p>
          <p>Proteção de dados no Brasil </p>
          <p>Anúncios personalizados</p>
          <p>Dispositivos compativeis</p>
          <p>Ajuda</p>
          <p>Sobre Disney+</p>
        </Com.Flex>
        <Com.Flex>
          <p>
            ® 2021 Disney, Disney+ e The Walt Disney Company. Todos os direitos
            reservados. Serviço de assinatura paga. Conteúdo sujeito a
            disponibilidade.
          </p>
        </Com.Flex>
        <Com.Flex>
          <p>
            Disney+ é um serviço pago, baseado em assinatura e sujeito a termos
            e condições. O serviço Disney+ é comercializado por The Walt Disney
            Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas,
            12.551, 12.555, 12.559, Piso 10, São Paulo/SP – CEP 04578-903,
            Brasil e CNPJ/M 73.042.962/0004-20
          </p>
        </Com.Flex>
      </Com.Footer>
    </>
  );
};

export { Home };
