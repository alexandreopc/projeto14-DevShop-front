import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import {Header, Categorie, CategoriesTitle, Card, Produts, Background, AllCategories} from "./style";
import cart from "./../../../assets/cart.png";
import lightmode from "./../../../assets/lightmode.png";
import hardware from "./../../../assets/hardware.png";
import audio from "./../../../assets/audio.png";
import smarthome from "./../../../assets/smarthome.png";
import books from "./../../../assets/books.png";
import games from "./../../../assets/games.png";
import chair from "./../../../assets/chair.png";
import peripherals from "./../../../assets/peripherals.png";


export default function HomePage() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
    renderProducts();
    }, []);

    function renderProducts(){
    const promise = axios.get("http://localhost:5000/home/");
    promise.then((response) => {
      setProducts(response.data);
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
            <img src={peripherals} />
          </Background>
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
      {products.map((product) => {
        return (
        <Card>
          <img src={product.url}/>
          <h1>{product.title}</h1>
          <h2>${product.price}</h2>
        </Card>
        )})}
      </Produts>
    </>
  );
}

