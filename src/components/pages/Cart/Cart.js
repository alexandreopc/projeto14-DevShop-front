import arrow from "./../../../assets/arrow.png"
import bin from "./../../../assets/delete.png"
import Container from "./style"
import UserContext from "../../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import axios from "axios";

export default function Cart() {
    const { token, email, products, setProducts } = useContext(UserContext);
    let totalCart = 0;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            email
        }
    }

    useEffect(() => {
        const promise = axios.get(`${process.env.REACT_APP_API_BASE_URL}/cart/`, config);
        promise.then((response) => {
            setProducts(response.data);
        })
        promise.catch((response) => { console.log(response) })
    }, [])

    return (
        <Container>
            <Link to="/home">
                <img src={arrow} />
            </Link>
            <h1>Cart</h1>
            <section className="products">
                {products.map((product) => {
                    totalCart += parseInt(product.price);
                    return (
                        <div className="product">
                            <img src={product.url} />
                            <div>
                                <p className="name">{product.title}</p>
                                <p className="price">${product.price}</p>
                            </div>
                            <img src={bin} />
                        </div>
                    )
                })}
            </section>
            <p>Total order:</p>
            <p>${totalCart}</p>
            <Link to="/checkout"><button>Checkout</button></Link>
        </Container>
    )
}