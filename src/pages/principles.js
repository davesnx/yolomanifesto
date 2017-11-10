import React from 'react'
import styled from 'styled-components'

import Main from './../components/main'
import { Header, HeaderH1 as H1, HeaderH2 as H2 } from './../components/header'
import Button from './../components/button'
import { version } from './../../package.json'
import { colors } from './../constants'

const PrinciplesTitle = styled.div`
  margin-bottom: 0.5em;
  text-align: center;

  font-size: 24px;
  font-weight: 200;
  font-style: italic;
`

const PrincipleList = styled.section`
  counter-reset: principle-counter;
  margin: 0 auto;
`

const Principle = styled.article`
  counter-increment: principle-counter;

  min-height: 100px;
  position: relative;
  margin: 2.5em 0;

  font-size: 20px;
  line-height: 30px;

  &::after {
    content: counter(principle-counter);

    position: absolute;
    top: -10px;
    left: -40px;

    font-size: 100px;
    font-weight: 700;

    z-index: -1;
    opacity: 0.6;
    color: ${colors.lightBlue};
  }
`

const Principles = () => (
  <div>
    <Header>
      <H2>Principles behind</H2>
      <H1>
        The Yolo <span>(Development)</span> Manifesto 🤘
      </H1>
      v{version}
    </Header>

    <Main>
      <PrinciplesTitle>We follow these principles:</PrinciplesTitle>

      <PrincipleList>
        <Principle>
          <p>
            Our highest priority is to satisfy the customer through early and
            continuous delivery of valuable software.
          </p>
        </Principle>

        <Principle>
          <p>
            Welcome changing requirements, even late in development. Agile
            processes harness change for the customer's competitive advantage.
          </p>
        </Principle>

        <Principle>
          <p>
            Deliver working software frequently, from a couple of weeks to a
            couple of months, with a preference to the shorter timescale.
          </p>
        </Principle>

        <Principle>
          <p>
            Business people and developers must work together daily throughout
            the project.
          </p>
        </Principle>

        <Principle>
          <p>
            Build projects around motivated individuals. Give them the
            environment and support they need, and trust them to get the job
            done.
          </p>
        </Principle>

        <Principle>
          <p>
            The most efficient and effective method of conveying information to
            and within a development team is face-to-face conversation.
          </p>
        </Principle>

        <Principle>
          <p>Working software is the primary measure of progress.</p>
        </Principle>

        <Principle>
          <p>
            Agile processes promote sustainable development. The sponsors,
            developers, and users should be able to maintain a constant pace
            indefinitely.
          </p>
        </Principle>

        <Principle>
          <p>
            Continuous attention to technical excellence and good design
            enhances agility.
          </p>
        </Principle>

        <Principle>
          <p>
            Simplicity--the art of maximizing the amount of work not done--is
            essential.
          </p>
        </Principle>

        <Principle>
          <p>
            The best architectures, requirements, and designs emerge from
            self-organizing teams.
          </p>
        </Principle>

        <Principle>
          <p>
            At regular intervals, the team reflects on how to become more
            effective, then tunes and adjusts its behavior accordingly.
          </p>
        </Principle>
      </PrincipleList>

      <Button link to='/'>
        ⟵ MANIFESTO
      </Button>
    </Main>
  </div>
)

export default Principles
