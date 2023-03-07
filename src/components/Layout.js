import React from "react";
//Components
import "../styles/global.css";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <LayoutWrapper>
      <Content>
        <Navbar />
        {children}
        <Footer />
      </Content>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.div`
  padding: 20px;
`;

const Content = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`;
