import styled from 'styled-components';

export const StyleAddModal = styled.div`
  background: var(--grey-3);
  width: 296px;
  height: 340px;
  position: absolute;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .div
  {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    max-width: 369px;
    background: var(--grey-2);
    height: 50px;
    border: none;
    margin: 0px auto;
  }

  h2
  {
    font-size: var(--font-6);
    font-weight: 700;
    font-family: var(--font-family);
    color: var(--grey-0);
    text-align: center;
    margin: 20px 0;
  }

  p
  {
    font-size: var(--font-6);
    font-weight: 600;
    font-family: var(--font-family2);
    color: var(--grey-1);
    margin: 20px 0;
    cursor: pointer;
  }

  form
  {
    display: flex;
    flex-direction: column;
    margin: 15px;
  }

  label
  {
    font-size: var(--font-7);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-0);
    margin: 10px 0;
  }

  input
  {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    width: 260px;
    height: 38px;
    background: var(--grey-2);
    border: none;
    border-radius: 3.21px;
    font-size: var(--font-5);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-0);
  }

  h4
  {
    font-size: var(--font-7);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-0);
    margin: 10px 0;
  }

  select
  {
    width: 263px;
    height: 38px;
    background: var(--grey-2);
    border: none;
    border-radius: 3.21px;
    font-size: var(--font-5);
    font-weight: 400;
    font-family: var(--font-family);
    color: var(--grey-0);
  }

  button
  {
    width: 260px;
    height: 38px;
    background: var(--color-primary);
    border: none;
    border-radius: 3.21px;
    font-size: var(--font-6);
    font-weight: 500;
    font-family: var(--font-family);
    color: var(--white);
    margin-top: 15px;
    cursor: pointer;
  }

  @media (min-width: 1100px) {
    width: 296px;
    height: 340px;
  }
`