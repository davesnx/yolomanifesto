import React from 'react'
import styled from 'styled-components'

import { Header, HeaderH1 as H1 } from './../components/header'
import Main from './../components/main'
import Button from './../components/button'
import { version } from './../../package.json'

const Description = styled.article`
  font-size: 20px;
  line-height: 30px;
  text-align: center;

  & > * + * {
    margin: 2em 0;
  }
`

const List = styled.div``

const Note = styled.div`
  font-size: 16px;
  line-height: 25px;
`

const People = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 450px) {
    & {
      flex-direction: column;
    }
  }
`

const Column = styled.div`
  padding: 0 10px;
`

const Home = () => (
  <div>
    <Header>
      <H1>
        The Yolo <span> (Development)</span> Manifesto 🤘
      </H1>
      v{version}
    </Header>

    <Main>
      <section>
        <Description>
          <p>
            We are uncovering better ways of developing software by doing it and
            helping others do it. Through this work we have come to value:
          </p>

          <List>
            Individuals and interactions over processes and tools Working
            software over comprehensive documentation Customer collaboration
            over contract negotiation Responding to change over following a plan
          </List>

          <Note>
            That is, while there is value in the items on the right, we value
            the items on the left more.
          </Note>

          <People>
            <Column>
              David Sancho
              <br />Mike Beedle
              <br />Arie van Bennekum
              <br />Martin Fowler
            </Column>
            <Column>
              James Grenning
              <br />Jim Highsmith
              <br />Andrew Hunt
              <br />Ron Jeffries
              <br />Jon Kern
              <br />Brian Marick
            </Column>
          </People>
        </Description>
      </section>

      <Button to='/principles/'>PRINCIPLES</Button>
    </Main>
  </div>
)

export default Home
