import styled from 'styled-components';

export const StyleNavBar = styled.header`

  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 50px 0 20px;
  border-bottom: 2px solid var(--grey-3);
  padding: 10px;
  
  @media(min-width: 600px)
  {
    margin-left: -40px;
  }
`