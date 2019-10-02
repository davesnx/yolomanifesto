import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    font-family: 'Roboto Mono', monospace;
    color: #222222;

    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }

  ::before,
  ::after {
    box-sizing: inherit;
    text-decoration: inherit; /* 1 */
    vertical-align: inherit; /* 2 */
  }

  html {
    overflow-y: scroll;

    /* background: url(./../assets/background.png) no-repeat center center fixed; */
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  /**
   * 1. Correct the line height in all browsers.
   * 2. Prevent adjustments of font size after orientation changes in
   *    IE on Windows Phone and in iOS.
   */

  html,
  body {
    line-height: 1.15; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
    cursor: default;

    margin: 0;
    padding: 0;

    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }

  /**
   * Remove the border on images inside links in IE 10-.
   */

  img {
    border-style: none;
  }

  p {
    margin: 0;
  }

  /**
   * 1. Remove the gray background on active links in IE 10.
   * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
   */

  a {
    background-color: transparent; /* 1 */
    -webkit-text-decoration-skip: objects; /* 2 */
  }

  a:active,
  a:hover {
    outline-width: 0;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring,
  button:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
`
