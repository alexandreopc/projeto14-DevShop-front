import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import { Container, Form, Input, Button, StyledLink } from "../FormComponents"

export default function SignUp() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password2: '' })
    const navigate = useNavigate();

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (formData.password !== formData.password2) {
            setFormData({ ...formData, password: "", password2: "" })
            return alert("Senhas não correspondem entre si!")
        }

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, {
            name: formData.name,
            email: formData.email,
            password: formData.password
        })
            .then((res) => {
                console.log(res)
                navigate("/")
            })
            .catch(e => console.log(e))
    }

    return (
        <Container>
            <h1>DevShop</h1>
            <h2>your favorite dev store</h2>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
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
                <Input
                    type="password"
                    placeholder="confirm password"
                    name="password2"
                    onChange={handleChange}
                    value={formData.password2}
                    required
                />

                <Button type="submit">Sign-up</Button>
            </Form>

            <StyledLink to="/">Already have an account? <span>Sign In</span></StyledLink>
        </Container>
    )
}