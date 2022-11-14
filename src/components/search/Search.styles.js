import styled from "styled-components";
import BackImage from "assets/images/pattern-bg.png";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  position: relative;
    margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:url(${BackImage});
  /* background-repeat :repeat; */
  input{
    position: relative;
    border-radius: 10px 0px 0px 10px;
  }
  h1{
    color: ${({ theme }) => theme.colors.white};
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

