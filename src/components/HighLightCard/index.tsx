import React from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Amount,
  LastTransaction,
} from "./styles";

interface IProps {
  type: "up" | "down" | "total";
  title: string;
  amount: string;
  lastTransaction: string;
}

const iconType = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighLighCard({ type, title, amount, lastTransaction }: IProps) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={iconType[type]} type={type} />
      </Header>
      <Content>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Content>
    </Container>
  );
}
