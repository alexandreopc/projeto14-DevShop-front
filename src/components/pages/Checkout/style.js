import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 30px;

  input {
    width: 333px;
    height: 64px;
    border-radius: 30px;
    background-color: #887299;
    border: none;
    color: #c4c4c4;
    font-size: 20px;
    text-align: center;
  }

  button {
    width: 257px;
    height: 52px;
    border-radius: 10px;
    border: none;
    background-color: #633e80;
    color: #ffffff;
    font-size: 20px;
    margin-bottom: 66px;
  }

  h2 {
    font-size: 20px;
  }
`;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  img {
    width: 24px;
    height: 24px;
    margin-top: 24px;
    margin-left: 22px;
  }
  hr {
    height: 0.1vh;
    width: 85vw;
    color: #000;
    background-color: #000;
  }
`;

const Title = styled.h1`
  font-size: 32px;
  padding-top: calc(24px - 34px);
  display: flex;
  justify-content: center;
`;

const Shipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
  padding-bottom: 20px;
  margin-right: 10px;

  p {
    font-size: 24px;
    margin-bottom: 5px;
  }

  h4 {
    font-size: 32px;
  }
`;

const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;

  p {
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

const Result = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  margin-top: 15px;
  margin-bottom: 26px;
`;

const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
  margin-right: 10px;

  h4 {
    font-size: 32px;
    padding-top: 9px;
  }
`;

export { Form, Container, Title, Values, Result, Order, Shipping };
