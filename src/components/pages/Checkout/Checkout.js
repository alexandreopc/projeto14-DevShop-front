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
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../contexts/UserContext";
import axios from "axios";

export default function Checkout() {
  const {products, config} = useContext(UserContext);
  const navigate = useNavigate();
  const random = Math.floor(Math.random() * 30 + 10);
  const [payment, setPayment] = useState("");
  const [address, setAddress] = useState("");
  const [shipping, setShipping] = useState(random);
  let total = 0;
  const teste = products.map((product)=> total += parseInt(product.price));
  for(let i = 0; i < teste.length; i++) {
    total += teste[i];
  }
  console.log(total);
  const finalTotal = shipping + total; 
  const body = {
    finalTotal,
    payment,
    address,
    products
  }
  

  function buyItens(e) {
    e.preventDefault();

    const promise = axios.post("http://localhost:5000/success", body, config);
    promise.then(()=> {
      alert("Compra feita com sucesso"); 
      navigate("/")
    });
    promise.catch((error)=> console.log(error));
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
            <p>${total}</p>
          </Order>
          <Shipping>
            <p>Shipping</p>
            <p>${shipping}</p>
          </Shipping>
          <hr></hr>
          <Values>
            <h4>Total</h4>
            <h4>${finalTotal}</h4>
          </Values>
        </Result>
        <button type="submit">Pay Now</button>
      </Form>
    </Container>
  );
}
