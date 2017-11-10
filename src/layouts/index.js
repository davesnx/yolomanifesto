import React from 'react'
import PropTypes from 'prop-types'
import styled, { injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'

import Footer from './../components/footer'
import { description } from './../../package.json'

injectGlobal`${require('./reset-css')}`

const Wrapper = styled.div`
  margin: 0 auto;
  maxWidth: 960px;
  padding: 0px 1.0875rem 1.45rem'
  paddingTop: 0;
`

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={description}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    >
      <meta charSet='utf-8' />
    </Helmet>
    <Wrapper>
      {children()}
    </Wrapper>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
