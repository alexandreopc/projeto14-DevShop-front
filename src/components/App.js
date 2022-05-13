import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/Homepage/HomePage";
import Hardware from "./pages/NavPages/Hardware";
import Audio from "./pages/NavPages/Audio";
import Smarthome from "./pages/NavPages/Smarthome";
import Books from "./pages/NavPages/Books";
import Accessory from "./pages/NavPages/Accessory";
import Games from "./pages/NavPages/Games";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserContext from "../contexts/UserContext";

export default function App() {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/signup" element={<SignUpPage />}></Route>
                    <Route path="/home" element={<HomePage />}></Route>
                    <Route path="/hardware" element={<Hardware />}></Route>
                    <Route path="/audio" element={<Audio />}></Route>
                    <Route path="/smarthome" element={<Smarthome />}></Route>
                    <Route path="/books" element={<Books />}></Route>
                    <Route path="/accessory" element={<Accessory />}></Route>
                    <Route path="/games" element={<Games />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}