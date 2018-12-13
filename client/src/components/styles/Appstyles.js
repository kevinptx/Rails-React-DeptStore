import styled from "styled-components";
import { Grid } from "semantic-ui-react";

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

export const StyledGrid = styled(Grid.Column)`
  margin: 1% important!;
  height: auto;
  min-height: 300px important!;
  width: 300px !important;
`;
