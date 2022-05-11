import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, Form, Input, Button, StyledLink } from "../FormComponents"
import AuthContext from "../../contexts/AuthContext";

export default function MainPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { user, setUser } = useContext(AuthContext)
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        axios.post(`http://endereco/signin`, {
            email: formData.email,
            password: formData.password
        })
            .then((res) => {
                console.log(res)
                const { token, name } = res.data;
                setUser({ name, token });
                navigate("/products")//mudar enderco
            })
            .catch(e => console.log(e))

    }

    return (
        <Container>
            <h1>DevShop</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
                <Input
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                    required
                />

                <Button type="submit">Login</Button>
            </Form>

            <StyledLink to="/signup">Don’t have an account? <span>Sign-up</span></StyledLink>
        </Container>
    )
}