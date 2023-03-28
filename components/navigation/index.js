import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { push } = useRouter();

  return (
    <StyledNav>
      <StyledNavButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </StyledNavButton>
      {isMenuOpen && (
        <StyledList>
          <StyledListItem>
            <StyledButton onClick={() => push("/")}>Home</StyledButton>
          </StyledListItem>
          <StyledListItem>
            <StyledButton onClick={() => push("/About")}>About</StyledButton>
          </StyledListItem>
          <StyledListItem>
            <StyledButton onClick={() => push("/Women")}>Women</StyledButton>
          </StyledListItem>
          <StyledListItem>
            <StyledButton onClick={() => push("/Men")}>Men</StyledButton>
          </StyledListItem>
        </StyledList>
      )}
    </StyledNav>
  );
}

const StyledSvg = styled.svg`
  fill: white;
`;

const StyledNav = styled.nav`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;

  @media (max-width: 768px) {
    width: 30%;
    justify-content: flex-start;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 30px;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: black;
`;
const StyledListItem = styled.li`
  margin: 0.5rem;
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration-line: underline;
    transform: scale(1.2);
  }
`;
const StyledNavButton = styled.button`
  background: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 1;
  border: none;

  & svg {
    fill: white;
  }
`;

const StyledButton = styled.button`
  background: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  position: relative;
  left: 5px;
  top: 5px;
  z-index: 1;
  color: white;
  border: none;
  transition: ease-in-out 0.3s;

  &:hover {
    text-decoration-line: underline;
  }
`;
