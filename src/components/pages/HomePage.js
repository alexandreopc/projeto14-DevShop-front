import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import cart from "./../../assets/cart.png";
import lightmode from "./../../assets/lightmode.png";
import hardware from "./../../assets/hardware.png";
import audio from "./../../assets/audio.png";
import smarthome from "./../../assets/smarthome.png";
import books from "./../../assets/books.png";
import games from "./../../assets/games.png";
import chair from "./../../assets/chair.png";

export default function HomePage() {
  return (
    <>
      <Header>
        <img src={lightmode} />
        <h1>DevShop</h1>
        <img src={cart} />
      </Header>
      <CategoriesTitle>Categories</CategoriesTitle>
      <AllCategories>
        <Categorie>
          <Background>
            <img src={hardware} />
          </Background>
          <h3>hardware</h3>
        </Categorie>
        <Categorie>
          <Background>
            <img src={audio} />
          </Background>
          <h3>audio</h3>
        </Categorie>
        <Categorie>
          <Background>
            <img src={smarthome} />
          </Background>
          <h3>smarthome</h3>
        </Categorie>
        <Categorie>
          <Background>
            <img src={books} />
          </Background>
          <h3>books</h3>
        </Categorie>
        <Categorie>
          <Background>
            <img src={games} />
          </Background>
          <h3>games</h3>
        </Categorie>
        <Categorie>
          <Background>
            <img src={chair} />
          </Background>
          <h3>chair</h3>
        </Categorie>
      </AllCategories>
      <Produts>
        <Card>
        </Card>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Produts>
    </>
  );
}

const Header = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;

  img {
    width: 25px;
    height: 25px;
    margin-right: 22px;
    margin-left: 22px;
  }
  h1 {
    font-size: 32px;
  }
`;

const CategoriesTitle = styled.h2`
  font-size: 23px;
  margin-left: 30px;
  margin-top: 30px;
`;

const AllCategories = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-left: 10px;
  margin-top: 24px;
  overflow-x: scroll;
`;

const Categorie = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: 15px;
    margin-top: 4px;
  }
`;

const Background = styled.div`
  width: 55px;
  height: 55px;
  background-color: #c4c4c4;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    height: 30px;
    width: 30px;
  }
`;

const Produts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 45px;
  margin-top: 39px;
  justify-content: center;
`;

const Card = styled.div`
  width: 131px;
  height: 176px;
  background-color: #887299;
  border-radius: 15px;

  img {
    width: 107px;
    height: 100px;
    border-radius: 10px;
  }

  h1 {
    margin-top: 5px;
    font-size: 15px;
    margin-left: 9px;
    margin-bottom: 29px;
  }
  h2 {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 14px;
    margin-left: 9px;
  }
`;
