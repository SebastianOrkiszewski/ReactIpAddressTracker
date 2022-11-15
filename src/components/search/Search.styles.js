import styled from "styled-components";
import BackImage from "assets/images/pattern-bg.png";

export const Wrapper = styled.div`
  width: 100vw;
  min-width: 295px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${BackImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  h1 {
    color: ${({ theme }) => theme.colors.white};
  }

  form {
    width: 100vw;
    max-width: 450px;
    min-width: 185px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  input {
    width: 100%;
    max-width: 450px;
    min-width: 185px;
    padding: 15px 0px 15px 10px;
    border-radius: 10px 10px 10px 10px;
    border: none;
    font-size: 1.15rem;
  }
  button {
    position: absolute;
    right: 0;
    background-color: ${({ theme }) => theme.colors.black};
    border: none;
    border-radius: 0px 10px 10px 0px;
    padding: 17px 20px 19px 20px;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.veryDarkGray};
      transition: background-color 0.2s;
    }
  }
`;

export const FormWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    margin-top: 15px;
  }
`;
