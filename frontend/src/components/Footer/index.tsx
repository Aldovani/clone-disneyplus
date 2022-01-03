import React from "react";

import { Flex, ContainerFooter,Image } from "./styles";

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <Image
        src="https://cannonball-cdn.bamgrid.com/assets/originals/logo-nopad.svg"
        alt="Logo Disney+"
      />
      <Flex>
        <span>Política de Privacidade </span>
        <span>Proteção de dados no Brasil</span>
        <span>Contrato de assinatura </span>
    
      
        <span>Ajuda </span>
        <span>Dispositivos Compativeis </span>
        <span>Sobre Disney+ </span>
        <span>Anúncios personalizados </span>
      
   
        <p>
          Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e
          condições. O serviço Disney+ é comercializado por The Walt Disney
          Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas,
          12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903, Brasil
          e CNPJ/M 73.042.962/0004-20
        </p>
     
        <p>© Disney. Todos os direitos reservados.</p>
      
      </Flex>
    </ContainerFooter>
  );
};

export  {Footer};
