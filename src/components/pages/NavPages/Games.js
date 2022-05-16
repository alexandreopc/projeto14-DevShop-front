import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Header,
  Categorie,
  CategoriesTitle,
  Card,
  Produts,
  Background,
  AllCategories,
} from "./style";
import UserContext from "../../../contexts/UserContext";
import cart from "./../../../assets/cart.png";
import lightmode from "./../../../assets/lightmode.png";
import hardware from "./../../../assets/hardware.png";
import audio from "./../../../assets/audio.png";
import smarthome from "./../../../assets/smarthome.png";
import book from "./../../../assets/book.png";
import game from "./../../../assets/game.png";
import chair from "./../../../assets/chair.png";
import peripherals from "./../../../assets/peripherals.png";

export default function Games() {
  const [games, setGames] = useState([]);
  const { email, config } = useContext(UserContext);

  useEffect(() => {
    renderGames();
  }, []);

  function renderGames() {
    const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/games/`);
    promise.then((response) => {
      setGames(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  function chooseProduct(item) {
    const body = {
      email,
      itemId: item._id,
      url: item.url,
      title: item.title,
      price: item.price
    };
    const promise = axios.post(`${process.env.REACT_APP_API_BASE_URL}/cart`, body, config);
    promise.then((response) => console.log(response.status));
  }

  return (
    <>
      <Header>
        <img src={lightmode} />
        <Link to="/home"><h1>DevShop</h1></Link>
        <Link to="/cart">
          <img src={cart} />
        </Link>
      </Header>
      <CategoriesTitle>Categories</CategoriesTitle>
      <AllCategories>
        <Categorie>
          <Link to="/hardware">
            <Background>
              <img src={hardware} />
            </Background>
          </Link>
          <h3>hardware</h3>
        </Categorie>
        <Categorie>
          <Link to="/audio">
            <Background>
              <img src={audio} />
            </Background>
          </Link>
          <h3>audio</h3>
        </Categorie>
        <Categorie>
          <Link to="/smarthome">
            <Background>
              <img src={smarthome} />
            </Background>
          </Link>
          <h3>smarthome</h3>
        </Categorie>
        <Categorie>
          <Link to="/books">
            <Background>
              <img src={book} />
            </Background>
          </Link>
          <h3>books</h3>
        </Categorie>
        <Categorie>
          <Link to="/accessory">
            <Background>
              <img src={peripherals} />
            </Background>
          </Link>
          <h3>accessory</h3>
        </Categorie>
        <Categorie>
          <Link to="/games">
            <Background>
              <img src={game} />
            </Background>
          </Link>
          <h3>games</h3>
        </Categorie>
        <Categorie>
          <Link to="/chair">
            <Background>
              <img src={chair} />
            </Background>
          </Link>
          <h3>chair</h3>
        </Categorie>
      </AllCategories>
      <Produts>
        {games.map((games) => {
          return (
            <Card key={games._id} onClick={() => { chooseProduct(games) }}>
              <img src={games.url} />
              <h1>{games.title}</h1>
              <h2>${games.price}</h2>
            </Card>
          );
        })}
      </Produts>
    </>
  );
}
