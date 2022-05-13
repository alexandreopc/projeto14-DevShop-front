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
import cart from "./../../../assets/cart.png";
import lightmode from "./../../../assets/lightmode.png";
import hardware from "./../../../assets/hardware.png";
import audio from "./../../../assets/audio.png";
import smarthome from "./../../../assets/smarthome.png";
import books from "./../../../assets/books.png";
import games from "./../../../assets/games.png";
import chair from "./../../../assets/chair.png";
import peripherals from "./../../../assets/peripherals.png";

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    renderBooks();
  }, []);

  function renderBooks() {
    const promise = axios.get("http://localhost:5000/books/");
    promise.then((response) => {
      setBooks(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <Header>
        <img src={lightmode} />
        <h1>DevShop</h1>
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
              <img src={books} />
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
        {books.map((book) => {
          return (
            <Card>
              <img src={book.url} />
              <h1>{book.title}</h1>
              <h2>${book.price}</h2>
            </Card>
          );
        })}
      </Produts>
    </>
  );
}
