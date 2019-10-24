import { css } from 'styled-components'

export const Typography = css`
  html {
    font-size: 10px;
  }

  body {
    font-family: 'Quattrocento Sans', sans-serif;
    font-weight: 400;
    word-wrap: break-word;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-size: 1rem;
  }

  h1,
  h2
  h3,
  h4,
  h5,
  h6,
  img {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    margin-bottom: 1.45rem;
  }

  h1,
  h2
  h3,
  h4,
  h5,
  h6 {
    color: hsla(0,0%,0%,0.9);
    font-family: 'Work Sans',sans-serif;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    line-height: 1.1;
  }

  img {
    max-width: 100%;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.51572rem;
  }

  h3 {
    font-size: 1.31951rem;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.87055rem;
  }

  h6 {
    font-size: 0.81225rem;
  }

  p {
    line-height: 1.45;
  }
`
