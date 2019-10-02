import React from 'react'

import Main from './../components/main'
import PageWrapper from './wrapper'
import { Header, HeaderH1 as H1 } from './../components/header'

const NotFoundPage = () => (
  <PageWrapper>
    <Header>
      <H1>NOT FOUND</H1>
    </Header>
    <Main>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Main>
  </PageWrapper>
)

export default NotFoundPage
