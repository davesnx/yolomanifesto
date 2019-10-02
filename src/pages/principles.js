import React from 'react'
import styled from 'styled-components'

import Main from '../components/main'
import { Header, HeaderH1 as H1, HeaderH2 as H2 } from '../components/header'
import Button from '../components/button'
import { version } from '../../package.json'
import PageWrapper from './wrapper'
import constants from '../constants'

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
    color: ${constants.colors.lightBlue};
  }
`

const Principles = () => (
  <PageWrapper>
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
            continuous delivery of valuable software aka deliver software
            frequently.
          </p>
        </Principle>

        <Principle>
          <p>
            Usually, the fastest option is the best option. You should implement
            anything as fast as you can be, without affecting the quality.
            Analyzing carefully which risk are you taking, where they come from
            and how to solve them on the future.
          </p>
        </Principle>

        <Principle>
          <p>
            We strongly think that Software does not have an end neither
            perfection. You should not fall into the temptation to create
            perfection around.
          </p>
        </Principle>

        <Principle>
          <p>Motivation is key.</p>
        </Principle>

        <Principle>
          <p>Bring community involvement from the beginning.</p>
        </Principle>

        <Principle>
          <p>
            The best projects, business and designs emerge from self-organizing
            teams. Teams need to be together. Together on a clear goal. Together
            on the decisions.
          </p>
        </Principle>

        <Principle>
          <p>There is no trust without honesty.</p>
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
  </PageWrapper>
)

export default Principles
