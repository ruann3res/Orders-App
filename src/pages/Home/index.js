import axios from "axios";
import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../Assets/burgerLogo.svg";
import Button from "../../components/Button";

import Container from "../../components/Container";
import ContainerItens from "../../components/ContainerItens";
import H1 from "../../components/Title";

import { Image, Input, InputLabel } from "../../styles/HomeStyles";

function Home() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputOrder = useRef();

  async function addNewOrder() {
    const { data: newOrders } = await axios.post(
      "http://localhost:3001/order",
      {
        nameClient: inputName.current.value,
        order: inputOrder.current.value,
      }
    );

    setOrders([...orders, newOrders]);

    alert(newOrders.status);

    history.push("/orders");
  }

  return (
    <Container isHome={true}>
      <Image alt="Logo" src={Logo} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input required ref={inputName} placeholder="Seu Nome" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;
