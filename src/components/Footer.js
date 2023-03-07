import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <p>Copyright 2023</p>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  p {
    text-align: center;
    color: #fff;
    margin: 40px auto;
  }
`;
