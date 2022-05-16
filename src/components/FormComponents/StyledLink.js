import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-size: 14px;
  line-height: 16px;
  text-decoration: none;

  color: #C4C4C4;

  span {
    color: #633E80;
  }

  @media (min-width: 700px){
    font-size: 15px;
}
`;

export default StyledLink;
