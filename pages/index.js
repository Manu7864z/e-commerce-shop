import styled from "styled-components";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();
  return (
    <StyledMain>
      <Heading>E-Commerce Shop</Heading>
      <StyledGrid>
        <StyledGridItem1 onClick={() => push("/Women")}>
          <h2>Women</h2>
        </StyledGridItem1>
        <StyledGridItem2 onClick={() => push("/About")}>
          <h2>About</h2>
        </StyledGridItem2>
        <StyledGridItem3 onClick={() => push("/Men")}>
          <h2>Men</h2>
        </StyledGridItem3>
        <StyledGridItem4 onClick={() => push("/Home")}>
          <h2>Home</h2>
        </StyledGridItem4>
      </StyledGrid>
    </StyledMain>
  );
}

const StyledGrid = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  height: 100%;
  background-color: grey;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-top: 5rem;
`;
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 1500px;
  width: 70%;
  border: 1px solid black;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledGridItem1 = styled.section`
  background-image: url(https://images.unsplash.com/photo-1588190437916-425872ddf591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80);
  grid-area: 1 / 1 / 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #f5f5f5;
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  border: 1px solid rgba(229, 223, 223, 0.22);

  -webkit-box-shadow: 7px 7px 15px #646871, -7px -7px 15px #ffffff;
  box-shadow: 7px 7px 15px #646871, -7px -7px 15px #ffffff;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.01);
  }

  h2 {
    color: white;
    font-size: 4rem;
    font-weight: 600;
  }
`;

const StyledGridItem2 = styled.section`
  background-image: url(https://images.unsplash.com/photo-1607004468138-e7e23ea26947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80);
  grid-area: 1 / 3 / 2 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: #f5f5f5;
  background-position: right;
  border-radius: 25px;
  border: 1px solid rgba(229, 223, 223, 0.22);

  -webkit-box-shadow: 7px 7px 15px #646871, -7px -7px 15px #ffffff;
  box-shadow: 7px 7px 15px #646871, -7px -7px 15px #ffffff;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.01);
  }
  h2 {
    color: white;
    font-size: 4rem;
    font-weight: 600;
  }
`;

const StyledGridItem3 = styled.section`
  background-image: url(https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  grid-area: 2 / 2 / 3 / 4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 25px;
  border: 1px solid rgba(229, 223, 223, 0.22);

  -webkit-box-shadow: 7px 7px 15px #646871, -7px -7px 15px #ffffff;
  box-shadow: 7px 7px 15px #646871, -7px -7px 15px #ffffff;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.01);
  }
  h2 {
    color: white;
    font-size: 4rem;
    font-weight: 600;
  }
`;

const StyledGridItem4 = styled.section`
  grid-area: 2 / 1 / 3 / 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f5;
  background: url(https://images.unsplash.com/photo-1509660933844-6910e12765a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
  border-radius: 25px;
  border: 1px solid rgba(229, 223, 223, 0.22);

  -webkit-box-shadow: 7px 7px 15px #646871, -7px -7px 15px #ffffff;
  box-shadow: 7px 7px 15px #646871, -7px -7px 15px #ffffff;
  transition: ease-in-out 0.3s;

  &:hover {
    transform: scale(1.01);
  }
  h2 {
    color: white;
    font-size: 4rem;
    font-weight: 600;
  }
`;
