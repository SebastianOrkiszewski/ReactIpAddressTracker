import styled from "styled-components";

export const Wrapper = styled.div`
  width: 80%;
  max-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 20px 30px 5px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.veryDarkGray};
  border-radius: 10px;
  z-index: 1000;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-around;
    max-height: 400px;
    margin-top: 50px;
    padding: 20px 0px 20px 0px;
  }
`;

export const Information = styled.div`
  text-align: center;
  padding: 0 20px 0 20px;

  h2 {
    font-size: 12px;
    padding: 0;
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.darkGray};
  }
  p {
    font-size: 22px;
    font-weight: bold;
    word-wrap: break-word;
    margin: 5px 0px 10px 0px;
    font-weight: 500;
  }
  @media screen and (min-width: 1200px) {
    min-height: 90px;
    width: 25%;
    height: 80%;
    margin: 5px;
    text-align: left;
    border-right: ${(props) => props.border};
    p {
      font-size: 1.7rem;
      padding: 5px 0 5px 0;
    }
  }
`;
