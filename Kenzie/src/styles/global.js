import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root
  {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --white: #FFFFFF;

    --font-3: 1.125rem; /*18px*/
    --font-4: 1rem; /*16px*/
    --font-5: .875rem; /*14px*/
    --font-6: .75rem; /*12px*/
    --font-7: .5994rem; /*9.59px*/

    --font-family: 'Inter', sans-serif;
  }

  body
  {
    background: var(--grey-3);
  }
`

export default GlobalStyle;