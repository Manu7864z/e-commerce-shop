import useSWR from "swr";
import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

export default function Men() {
  const { push } = useRouter();
  const { data } = useSWR("/api/articles");
  const articlesForMen = data[0].Men;
  console.log(data[0].Men);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <StyleMain>
      <h1>Men</h1>
      <StyledItemList>
        {articlesForMen.map((article) => (
          <StyledListItem key={article._id}>
            <h2>{article.name}</h2>
            <Image
              src={article.image}
              alt={article.name}
              height={600}
              width={600}
            />
            <p>{article.price}</p>
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
  align-items: center;
  list-style: none;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
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
  cursor: pointer;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;
