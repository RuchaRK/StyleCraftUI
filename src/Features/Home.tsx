import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { Button } from "../UIComponents/Button/Button";
import { ButtonsContainer } from "../Components/Header.styles";
import { PageWrapper } from "../Components/PageWrapper";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
`;

export const Home = () => {
  const navigate = useNavigate();
  return (
    <PageWrapper>
      <HomeContainer>
        <h2>Your Unique Component Library. </h2>
        <ButtonsContainer>
          <Button
            size="large"
            onClick={() => {
              navigate("/components/avatar");
            }}
          >
            Explore Components
          </Button>
        </ButtonsContainer>
      </HomeContainer>
    </PageWrapper>
  );
};
