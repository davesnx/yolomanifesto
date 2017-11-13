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
            The Yolo Manifesto is an opinionated work methodology for Software
            Developers/Teams, Product Teams and any kind of organization.
            <br />
            <br />
            It might look similar to Agile Manifesto but with the difference
            that we consider time the most important value. Time is the unique
            resource that can’t be full-filled. If you can deliver something
            fast, you must release it fast.
          </p>

          <Note>
            We know how to do it, we don't know how to explain it well yet.
          </Note>

          <People>
            <Column>
              David Sancho
              <br />???
              <br />???
              <br />???
            </Column>
            <Column>
              ???
              <br />???
              <br />???
              <br />???
            </Column>
          </People>
        </Description>
      </section>

      <Button to='/principles/'>PRINCIPLES</Button>
    </Main>
  </div>
)

export default Home
