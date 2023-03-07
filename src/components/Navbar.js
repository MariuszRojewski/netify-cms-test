import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <h1>Logo</h1>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </Links>
    </Nav>
  );
}

const Links = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: flex-end;

  a {
    padding-right: 10px;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 40px auto;

  .links {
    display: inline-block;
    text-align: right;

    a {
      display: inline-block;
      margin-left: 20px;
      font-weight: 400;
      padding-bottom: 8px;
      border-bottom: 3px solid transparent;
    }
  }
`;
