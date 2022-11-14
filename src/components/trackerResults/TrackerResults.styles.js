import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%;
  background-color: ${({ theme }) => theme.colors.white};
  
  border-radius: 10px;
  padding: 20px 30px 5px 30px;
  z-index: 1000;
  
`;

export const Information = styled.div`
text-align: center;
/* border-right: solid; */

h2{
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 12px;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  font-weight: bold;

  
}
p{
    font-size: 22px;
    font-weight: bold;
    word-wrap: break-word;
    margin: 5px 0px 10px 0px;
}
  
`;