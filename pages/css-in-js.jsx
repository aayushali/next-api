import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 100px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function CssJs() {
  return (
    <div>
      {/* <h2 style={{ color: "red" }}>Hello world</h2> */}
      <Title>Styled Component</Title>
    </div>
  );
}
// lets add styled-components using npm add styled-components
