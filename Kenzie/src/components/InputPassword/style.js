import styled from 'styled-components';

export const StyleInputPassword = styled.fieldset`
  display: flex;
  flex-direction: column;

  button
  {
    position: absolute;
    width: 25px;
    height: 40px;
    padding: 4px;
    background: var(--grey-2);
    border: none;
    margin-left: 230px;
    top: 274px;
    border-radius: 3.21px;
    color: var(--grey-1);
  }

  @media (min-width: 700px) {
    button
    {
      height: 49px;
      margin-left: 280px;
      top: 304px;
    }
  }
`