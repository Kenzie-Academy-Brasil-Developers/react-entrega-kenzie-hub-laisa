import styled from 'styled-components';

export const StyleLogin = styled.main`
  display: flex;
  flex-direction: column;

  header
  {
    text-align: center;
    margin: 50px 0 20px;
  }

  h1
  {
    font-size: var(--font-5);
    font-weight: 700;
    font-family: var(--font-family);
    color: var(--grey-0);
    text-align: center;
    margin: 40px 0 20px;
  }

  form
  {
    display: flex;
    flex-direction: column;
    margin: 10px auto;
  }

  label
  {
    font-size: var(--font-7);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-0);
    margin: 20px 0 15px;
  }

  input
  {
    font-size: var(--font-6);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-0);
    width: 260px;
    height: 38px;
    background: var(--grey-2);
    border-radius: 3.21px;
    border: none;
    margin: 0 auto;
  }

  .entrar
  {
    font-size: var(--font-6);
    font-weight: 500;
    font-family: var(--font-family);
    color: var(--white);
    width: 270px;
    height: 38px;
    background: var(--color-primary);
    border-radius: 4px;
    border: none;
    margin: 30px auto;
    text-align: center;
    padding: 15px;
  }

  .entrar:hover
  {
    background: var(--color-primary-focus);
  }

  p
  {
    font-size: var(--font-7);
    font-weight: 600;
    font-family: var(--font-family);
    color: var(--grey-1);
    text-align: center;
  }

  .cadastre
  {
    font-size: var(--font-6);
    font-weight: 500;
    font-family: var(--font-family);
    color: var(--grey-0);
    width: 270px;
    height: 38px;
    background: var(--grey-1);
    border-radius: 4px;
    border: none;
    margin: 30px auto;
    text-align: center;
    padding: 15px;
  }

  .cadastre:hover
  {
    background: var(--grey-2);
  }

  @media(min-width: 700px)
  {
  h1
  {
    font-size: var(--font-3);
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

  .entrar
  {
    font-size: var(--font-4);
    width: 324px;
    height: 48px;
  }

  p
  {
    font-size: var(--font-6);
  }

  .cadastre
  {
    font-size: var(--font-4);
    width: 324px;
    height: 48px;
  }
  }
`