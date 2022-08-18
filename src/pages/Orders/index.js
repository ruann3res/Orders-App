import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import OrderLogo from "../../Assets/bagLogo.svg";
import Trash from "../../Assets/trash.png";

import Button from "../../components/Button";
import Container from "../../components/Container";
import ContainerItens from "../../components/ContainerItens";
import H1 from "../../components/Title";
import { Image, Order, OrderPainel } from "../../styles/OrderStyles";

function Orders() {
  const history = useHistory();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/order"
      );
      setOrders(newOrders.Orders);
      console.log(newOrders.Orders);
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/order/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId);
    setOrders(newOrders);
  }
  function goBackPage() {
    history.push("/");
  }
  return (
    <Container>
      <ContainerItens>
        <Image src={OrderLogo} />
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Order key={order.id}>
              <OrderPainel>
                - <p>{order.order}</p> <p>STATUS: {order.status}</p>
                <p>{order.nameClient}</p>
              </OrderPainel>

              <button onClick={() => deleteOrder(order.id)}>
                <img src={Trash} alt="Lata de lixo" />
              </button>
            </Order>
          ))}
        </ul>
        <Button isBack={true} onClick={goBackPage}>
          Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}
export default Orders;
