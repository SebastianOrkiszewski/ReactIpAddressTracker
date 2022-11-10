import styled from "styled-components";

export const Wrapper = styled.div`
margin-top: 100px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr ;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  padding: 5px 30px 5px 30px;
`;

export const Information = styled.div`
text-align: left;
border-left: solid;

h2{
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 12px;
  
}
p{
    font-size: 22px;
    font-weight: bold;
    word-wrap: break-word;
}
  
`;