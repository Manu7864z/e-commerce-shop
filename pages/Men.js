import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

export default function Men({ data }) {
  const { push } = useRouter();
  const [articlesForMen, setArticlesForMen] = useState(data[0].Men);

  console.log(articlesForMen);

  return (
    <StyleMain>
      <Styledh1>Men</Styledh1>
      <StyledItemList>
        {articlesForMen?.map((article) => (
          <StyledListItem key={article._id}>
            <Styledh2>{article.name}</Styledh2>
            <StyledImage
              src={article.image}
              alt={article.name}
              height={900}
              width={900}
            />
            <p>Preis: {article.price}€</p>
            <p>{article.available}</p>
            <p>Sizes:</p>
            <select>
              {article.sizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </StyledListItem>
        ))}
      </StyledItemList>
    </StyleMain>
  );
}

const StyledItemList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
  }
`;

const StyleMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style: none;
  background-color: rgb(36, 39, 43);
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-sizing: border-box;
`;
const StyledImage = styled(Image)`
  width: 70%;
  height: 30%;
  border-radius: 10px;
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.01);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Styledh1 = styled.h1`
  font-size: 2rem;
  color: white;
  margin: 1rem 3rem 0 0;
  padding: 0;
  align-self: flex-end;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Styledh2 = styled.h2`
  font-size: 1.5rem;
  color: white;
  margin: 0;
  padding: 0;
`;
