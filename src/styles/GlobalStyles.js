import { createGlobalStyle } from "styled-components";

/* 
font size
1.2rem
1.4rem
1.6rem
*/

const GlobalStyles = createGlobalStyle`
:root {
  --font-size-sm: 1.2rem;
  --font-size-md: 1.4rem;
  --font-size-lg: 1.6rem;
  --font-size-llg: 2.2rem;
  --font-size-lllg: 3rem;
  --font-size-extra: 4.8rem;
  
/* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;


  /* Yellow */
  --color-brand-0: #fff9db;
  --color-brand-50: #fff3bf;
  --color-brand-100: #ffec99;
  --color-brand-200: #ffe066;
  --color-brand-300: #ffd43b;
  --color-brand-400: #fcc419;
  --color-brand-500: #fab005;
  --color-brand-600: #f59f00;
  --color-brand-700: #f08c00;
  --color-brand-800: #e67700;
  
  //RED 
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;



  /* Indigo */
  /* --color-brand-50: #edf2ff;
  --color-brand-100: #dbe4ff;
  --color-brand-200: #bac8ff;
  --color-brand-500: #91a7ff;
  --color-brand-600: #748ffc;
  --color-brand-700: #5c7cfa;
  --color-brand-800: #4c6ef5;
  --color-brand-900: #4263eb; */




  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  --border-radius-extra: 20px;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
    background-color: var(--color-brand-100);
}

body {
  font-family: "Urbanist", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
} 

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}
`;

export default GlobalStyles;
