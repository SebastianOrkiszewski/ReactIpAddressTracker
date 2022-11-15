import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  min-width: 295px;
  display: grid;
  grid-template-rows: 300px 1fr;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;
