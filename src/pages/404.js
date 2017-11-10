import React from 'react'
import Main from './../components/main'

import { Header, HeaderH1 as H1 } from './../components/header'

const NotFoundPage = () => (
  <div>
    <Header>
      <H1>NOT FOUND</H1>
    </Header>
    <Main>
      <p>You just hit a route that doesn't exist... the sadness.</p>
    </Main>
  </div>
)

export default NotFoundPage
