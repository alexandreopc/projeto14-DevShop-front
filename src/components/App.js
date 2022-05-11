import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import AuthContext from "../contexts/AuthContext";

export default function App() {
    const [user, setUser] = useState(null);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/signup" element={<SignUpPage />}></Route>
                    {/* <Route path="/products" element={<ProductsPage />}></Route> */}
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}