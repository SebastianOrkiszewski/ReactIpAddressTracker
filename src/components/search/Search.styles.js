import styled from "styled-components";
import BackImage from "assets/images/pattern-bg.png";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:url(${BackImage});
  background-repeat :round;
  input{
    padding: 10px 10px;
    border-radius: 10px 0px 0px 10px;
  }
`;

