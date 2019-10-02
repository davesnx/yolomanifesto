import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import Footer from '../components/footer'
import GlobalStyle from '../layouts/base'
import { description } from '../../package.json'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const PageWrapper = ({ children }) => (
  <div>
    <GlobalStyle />
    <Helmet
      title={description}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    >
      <meta charSet='utf-8' />
    </Helmet>
    <Wrapper>{children}</Wrapper>
    <Footer />
  </div>
)

PageWrapper.propTypes = {
  children: PropTypes.func
}

export default PageWrapper
