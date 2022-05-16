import styled from "styled-components";

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
  gap: 15px;
  margin-left: 10px;
  margin-top: 24px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
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
    margin-left: 12px;
    margin-top: 12px;
    margin-right: 12px;
    width: 107px;
    height: 100px;
    border-radius: 10px;
  }

  h1 {
    margin-top: 5px;
    font-size: 15px;
    margin-left: 9px;
  }
  h2 {
    margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 14px;
    margin-left: 9px;
  }
`;

export {Header, Categorie, CategoriesTitle, Card, Produts, Background, AllCategories};