import { createGlobalStyle } from 'styled-components'
import { fluidRange, normalize } from 'polished'

const GlobalStyle = createGlobalStyle`
${normalize()}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey};
  line-height: 2;

  &.body--no-overflow {
    overflow: hidden;
  }
}

strong, b {
  font-weight: 700;
}

a {
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  position: relative;
  font-weight: 800;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gold};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.gold};
    border-color: ${({ theme }) => theme.colors.dark};
  }
}

h1, h2, h3, h4, h5 {
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.font.headings};
  font-weight: 300;
  text-decoration: none;
  margin: 0.3em 0 0.5em;
  line-height: 1;

  a {
    font-weight: 300;
  }
}

h1 {
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '35px',
      toSize: '70px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'margin-bottom',
      fromSize: '15px',
      toSize: '20px'
    },
    '400px',
    '1000px'
  )}
  margin-top: 0;
}

h2 {
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '40px',
      toSize: '60px'
    },
    '400px',
    '1000px'
  )}
}

h3 {
  margin-bottom: 0.7em;
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '25px',
      toSize: '45px'
    },
    '400px',
    '1000px'
  )}
}

h4 {
  margin-bottom: 0.2em;
  ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '22px',
      toSize: '32px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'margin-top',
      fromSize: '10px',
      toSize: '30px'
    },
    '400px',
    '1000px'
  )}
}

p {
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey};
  ${fluidRange(
    {
      prop: 'margin-top',
      fromSize: '10px',
      toSize: '20px'
    },
    '400px',
    '1000px'
  )}
  ${fluidRange(
    {
      prop: 'margin-bottom',
      fromSize: '10px',
      toSize: '20px'
    },
    '400px',
    '1000px'
  )}
}

em {
  font-style: italic;
}

blockquote {
  padding-left: 20px;
  border-left: 8px solid ${({ theme }) => theme.colors.light};

  p {
    font-weight: bold;
    padding-top: 7px;
    padding-bottom: 15px;
    ${fluidRange(
    {
      prop: 'font-size',
      fromSize: '18px',
      toSize: '22px'
    },
    '400px',
    '1000px'
  )}
  }
}
`

export default GlobalStyle
