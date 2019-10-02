import Link from 'gatsby-link'
import styled from 'styled-components'

import constants from '../constants'

const Button = styled(Link)`
  color: ${constants.colors.blue};
  text-align: center;
  font-size: 30px;
  text-decoration: none;
  padding: 20px;
  margin: 20px 40px;

  border: ${p => (p.link ? 'none' : `10px solid ${constants.colors.blue}`)};

  &:hover {
    text-underline-position: under;
    text-decoration: underline;
  }

  @media screen and (max-width: 450px) {
    & {
      margin: 0;
    }
  }
`

export default Button
