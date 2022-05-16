import styled from "styled-components"

const Button = styled.button`
  width: 160px;
  height: 55px;
  margin-bottom: 20px;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  
  font-size: 20px;
  text-align: center;
  
  background: #633E80;
  color: #FFFFFF;

  @media (min-width: 700px){
    width: 250px;
    height: 60px;
}
`;

export default Button