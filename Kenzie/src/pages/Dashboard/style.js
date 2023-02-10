import styled from 'styled-components';

export const StyleDashboard = styled.main`

  .header
  {
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: nowrap;
  }

  .sair
  {
    font-size: var(--font-6);
    font-weight: 600;
    font-family: var(--font-family);
    color: var(--grey-0);
    width: 55px;
    height: 32px;
    background: var(--grey-3);
    border-radius: 4px;
    border: none;
    text-align: center;
    padding: 10px;
  }

  .sair:hover
  {
    background: var(--grey-2);
  }

  h2
  {
    font-size: var(--font-3);
    font-weight: 700;
    font-family: var(--font-family);
    color: var(--grey-0);
    margin: 50px 20px 30px;
  }

  p
  {
    font-size: var(--font-6);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-1);
    margin: 20px 20px 30px;
  }

  div
  {
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
  }

  h3
  {
    font-size: var(--font-3);
    font-weight: 700;
    font-family: var(--font-family);
    line-height: 25px;
    color: var(--grey-0);
    margin: 20px 20px 30px;
  }

  .descricao
  {
    font-size: var(--font-4);
    font-weight: 400;
    font-family: var(--font-family);
    line-height: 20px;
    color: var(--white);
    margin: 20px 20px 30px;
  }

  @media(min-width: 600px)
  {
    .header
    {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      text-align: center;
      flex-wrap: nowrap;
    }

    p
    {
      margin: 50px 20px 30px;
    }

    h3
    {
      margin: 20px 70px 30px;
    }

    .descricao
    {
      margin: 20px 70px 30px;
    }
  }

  @media(min-width: 1000px)
  {
    h3
    {
      margin: 20px 50px 30px;
    }

    .descricao
    {
      margin-left: 50px;
    }
  }

  @media(min-width: 1100px)
  {
    h3
    {
      margin: 20px 0px 30px;
    }

    .descricao
    {
      margin-left: 0px;
    }
  }

  @media(min-width: 1300px)
  {
    h3
    {
      margin: 20px -80px 30px;
    }

    .descricao
    {
      margin-left: -80px;
    }
  }

  @media(min-width: 1800px)
  {
    h3
    {
      margin: 20px -220px 30px;
    }

    .descricao
    {
      margin-left: -220px;
    }
  }
`