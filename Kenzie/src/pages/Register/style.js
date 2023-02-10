import styled from 'styled-components';

export const StyleRegister = styled.main`
  display: flex;
  flex-direction: column;

  header
  {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 20px 10px 20px;
  }

  .voltar
  {
    font-size: var(--font-7);
    font-weight: 600;
    font-family: var(--font-family);
    color: var(--grey-0);
    background: var(--grey-3);
    border: none;
    border-radius: 4px;
    width: 55px;
    height: 32px;
    padding: 10px;
  }

  .voltar:hover
  {
    background: var(--grey-1);
  }

  h2
  {
    font-size: var(--font-5);
    font-weight: 700;
    font-family: var(--font-family);
    color: var(--grey-0);
    text-align: center;
    margin-top: 10px;
  }

  p
  {
    font-size: var(--font-7);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-1);
    text-align: center;
    margin-top: 20px;
  }

  form
  {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
  }

  label
  {
    font-size: var(--font-7);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-0);
    margin: 0 15px;
  }

  input
  {
    font-size: var(--font-6);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-1);
    width: 260px;
    height: 38px;
    background: var(--grey-2);
    border-radius: 3.2px;
    border: none;
    margin: 10px auto;
  }

  h3
  {
    font-size: var(--font-7);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-0);
    margin: 20px 0 0;
  }

  select
  {
    font-size: var(--font-6);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-1);
    margin: 10px auto;
    width: 260px;
    height: 38px;
    background: var(--grey-2);
    border-radius: 3.2px;
    border: none;
  }

 .cadastrar
  {
    font-size: var(--font-6);
    font-weight: 500;
    font-family: var(--font-family);
    color: var(--white);
    margin: 10px auto;
    width: 260px;
    height: 38px;
    background: var(--color-primary-negative);
    border-radius: 4px;
    border: none;
  }

  .cadastrar:hover
  {
    background: var(--color-primary);
  }

  @media(min-width: 350px)
  {
    header
    {
      justify-content: space-around;
    }
  }

  @media(min-width: 500px)
  {
    header
    {
      margin: 50px 20px 10px 20px;
    }
  }

  @media(min-width: 650px)
  {
    label
    {
      margin-left: 10px;
    }

    h3
    {
      margin-left: 10px;
    }
  }

  @media(min-width: 700px)
  {
    header
    {
      margin: 50px 100px;
    }

    .voltar
    {
      font-size: var(--font-6);
    }

    h2
    {
      font-size: var(--font-3);
    }

    p
    {
      font-size: var(--font-6);
    }

    label
    {
      font-size: var(--font-6);
    }

    input
    {
      font-size: var(--font-4);
      width: 320px;
      height: 48px;
      border-radius: 4px;
    }

    h3
    {
      font-size: var(--font-6);
    }

    select
    {
      font-size: var(--font-4);
      width: 320px;
      height: 48px;
      border-radius: 4px;
    }

    option
    {
      font-size: var(--font-4);
    }

    .cadastrar
    {
      font-size: var(--font-4);
      width: 320px;
      height: 48px;
      background: var(--color-primary-negative);
    }
  }

  @media(min-width: 1000px)
  {
    header
    {
      margin: 50px 150px;
    }
  } 

  @media(min-width: 1200px)
  {
    header
    {
      margin: 50px 250px;
    }
  } 

  @media(min-width: 1350px)
  {
    header
    {
      margin: 50px 350px;
    }
  } 

  @media(min-width: 1400px)
  {
    header
    {
      margin: 50px 400px;
    }
  } 

  @media(min-width: 1500px)
  {
    header
    {
      margin: 50px 450px;
    }
  } 
`