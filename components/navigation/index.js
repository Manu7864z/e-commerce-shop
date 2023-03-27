import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { push } = useRouter();

  return (
    <StyledNav>
      <StyledNavButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <CiMenuBurger />
      </StyledNavButton>
      {isMenuOpen && (
        <StyledList>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/woman">Woman</Link>
          </li>
          <li>
            <Link href="/men">Men</Link>
          </li>
        </StyledList>
      )}
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  top: 0;
  left: 0;
  li {
    margin: 0.5rem 0;
  }
`;
const StyledNavButton = styled.button`
  background: none;
  cursor: pointer;
  font-size: 1rem;

  padding: 0;
  position: absolute;
  left: 5px;
  top: 5px;
`;
