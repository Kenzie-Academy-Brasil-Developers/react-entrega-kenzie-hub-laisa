import styled from 'styled-components';

export const StyleDashboard = styled.main`
  display: flex;
  flex-direction: column;

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
    font-weight: 600;
    font-family: var(--font-family);
    line-height: 20px;
    color: var(--grey-1);
    margin: 50px 20px 30px;
  }

  .tech
  {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 50px 20px;
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

  .edite
  {
    background: var(--grey-1);
    border-radius: 4px;
    border: none;
  }

  .descricao
  {
    background: var(--grey-3);
    border: none;
    margin: 20px 20px 30px;
    color: var(--white);
  }

  .techAdd
  {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 5px;
  }

  li
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 30px 50px 20px;
  }

  .delete
  {
    background: none;
    border: none;
  }

  h4
  {
    font-size: var(--font-5);
    font-weight: 700;
    font-family: var(--font-family);
    line-height: 25px;
    color: var(--grey-0);
    margin: 20px 20px 30px;
  }

  h5
  {
    font-size: var(--font-6);
    font-weight: 400;
    font-family: var(--font-family);
    line-height: 25px;
    color: var(--grey-1);
    margin: 20px 20px 30px;
  }

  @media(min-width: 600px)
  {
    .header
    {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 30px 50px 20px;
      text-align: center;
      flex-wrap: nowrap;
    }

    .descricao
    {
      margin: 20px 70px 30px;
    }

    div
    {
      justify-content: space-around;  
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
      margin: 20px 70px 50px;
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
      margin: 20px 50px 90px;
    }

    div
    {
      width: 100%;
      max-width: 1200px;
      margin: 30px 20px 0;
      display: flex;
      flex-direction: column;
    }

    .tech
    {
      display: flex;
      flex-direction: row;
    }
  }

  @media(min-width: 1300px)
  {
    .header
    {
      justify-content: space-around;
      margin-left: 10px;
    }
    .tech 
    {
      justify-content: space-around;
      margin: 0 auto;
    }

    li
    {
      justify-content: space-around;
      margin-left: 80px;
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
      margin: 20px 50px 60px;
    }

    div
    {
      margin: 30px 290px;
    
    }
  }
`