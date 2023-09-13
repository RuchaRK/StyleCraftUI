import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px;
`;

export const Title = styled.h1``;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Search = styled.input`
  padding: 7px;
  border-radius: 0px;
  width: 300px;
  border-right: none;
  border: 1px var(--primary-main) solid;
  border-radius: 4px 0 0 4px;
  height: 32px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`;
