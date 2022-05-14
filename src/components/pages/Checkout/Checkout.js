import { useState, useContext } from "react";
import arrow from "./../../../assets/arrow.png";
import {
  Form,
  Container,
  Title,
  Values,
  Result,
  Order,
  Shipping,
} from "./style";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [payment, setPayment] = useState("");
  const [address, setAddress] = useState("");
  const [shipping, setShipping] = useState(20);

  function buyItens(e) {
    e.preventDefault();
    alert("Compra feita com sucesso");
  }

  return (
    <Container>
      <Link to="/cart">
        <img src={arrow} />
      </Link>
      <Title>Checkout</Title>
      <Form onSubmit={buyItens}>
        <h2>Methods of payment</h2>
        <input
          type="text"
          name="payment"
          value={payment}
          onChange={(e) => setPayment(e.target.value)}
          required
        />
        <h2>Address</h2>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <Result>
          <Order>
            <p>Order</p>
            <p>$100</p>
          </Order>
          <Shipping>
            <p>Shipping</p>
            <p>${shipping}</p>
          </Shipping>
          <hr></hr>
          <Values>
            <h4>Total</h4>
            <h4>$100</h4>
          </Values>
        </Result>
        <button type="submit">Pay Now</button>
      </Form>
    </Container>
  );
}
