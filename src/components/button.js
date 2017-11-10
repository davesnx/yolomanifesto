import Link from 'gatsby-link'
import styled from 'styled-components'

const Button = styled(Link)`
  color: #0074D9;
  text-align: center;
  font-size: 30px;
  text-decoration: none;
  padding: 20px;
  margin: 20px 40px;

  border: ${p => (p.link ? 'none' : '10px solid #0074D9')};

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
