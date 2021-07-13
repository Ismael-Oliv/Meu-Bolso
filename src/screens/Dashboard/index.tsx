import React from "react";

import { HighLighCard } from "../../components/HighLightCard";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighLighCards,
} from "./style";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://media-exp1.licdn.com/dms/image/C4D35AQF2ka2cioVWqQ/profile-framedphoto-shrink_200_200/0/1619989659906?e=1626278400&v=beta&t=oQ9R2sBIkHD6RA7PaOU9l4mnWwBuCv9GgVUkqEylw3Y",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Ismael</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighLighCards>
        <HighLighCard
          title="Entradas"
          amount="R$ 18.300,00"
          lastTransaction="Ultima entrada dia 13 de abril"
          type="up"
        />
        <HighLighCard
          title="Saidas"
          amount="R$ 11.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
          type="down"
        />
        <HighLighCard
          title="Total"
          amount="R$ 77.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
          type="total"
        />
      </HighLighCards>
    </Container>
  );
}
