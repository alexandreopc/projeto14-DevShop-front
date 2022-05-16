import styled from "styled-components";

const Container = styled.main`

img {
    margin-left: 22px;
    color: #633E80;
    width: 25px;
    height: 25px;
    margin-top: 29px;
}

h1 {
    margin-left: 22px;
    margin-top: 29px;
    font-weight: 400;
    font-size: 32px;
    line-height: 36px;
    color: black;
}

p:nth-last-child(3){
    font-weight: 400;
    font-size: 24px;
    line-height: 27px;
    text-align: center;
    color: #C4C4C4;
}

p:nth-last-child(2) {
    font-weight: 400;
    font-size: 40px;
    line-height: 45px;
    color: #000000;
    text-align: center;
}

button {
    width: 257px;
    height: 52px;
    margin: 50px 50px 20px 50px;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    text-align: center;
    background: #633E80;
    color: #FFFFFF;
}

.products {
    width: 90%;
    margin-bottom: 77px;
    .product {
        display: flex;
        justify-content: start;
        align-items: center;
        position: relative;

        img {
            width: 80px;
            height: 80px;
            margin-right: 10px;
        }

        .name {
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            color: #000000;
            margin-bottom: 5px;
        }

        .price {
            font-weight: 400;
            font-size: 16px;
            line-height: 18px;
            color: #000000;
        }

        img:last-child {
            top: 15%;
            right: 0;
            position: absolute;
            width: 18px;
            height: 20px;
        }
    }
}
`

export default Container;