import styled from "styled-components";

const fontSize = size => {
  switch (size) {
    case "large":
      return "45px";
    case "small":
      return "35 px";
    default:
      return "25px";
  }
};

export const HeaderText = styled.h1`
  color: blue !important;
  text-align: center;
  font-size: ${props => fontSize(props.fSize)} !important;
`;
