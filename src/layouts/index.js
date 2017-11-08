import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Footer = () => (
  <footer className='footer'>
    <div className='footer-content'>
      <p>
        Are you actually following some of this? It has been a revelation for you? Do you want to apply that to your bussines? or
        maybe... want to make joke of this?
      </p>

      <div className='social-media'>
        <a
          href='mailto:theyolomanifesto@gmail.com'
          className='mail social-media-item'
        >
          Send us a email
          <svg className='icon' viewBox='0 0 32 32'>
            <title>mail icon</title>
            <path d='M0 6 L16 16 L32 6 z M0 9 L0 26 L32 26 L32 9 L16 19 z' />
          </svg>
        </a>

        <a
          href='https://twitter.com/yolomanifesto'
          target='_blank'
          className='twitter social-media-item'
        >
          or @yolomanifesto
          <svg className='icon' viewBox='0 0 32 32'>
            <title>twitter icon</title>
            <path d='M2 4 C6 8 10 12 15 11 A6 6 0 0 1 22 4 A6 6 0 0 1 26 6 A8 8 0 0 0 31 4 A8 8 0 0 1 28 8 A8 8 0 0 0 32 7 A8 8 0 0 1 28 11 A18 18 0 0 1 10 30 A18 18 0 0 1 0 27 A12 12 0 0 0 8 24 A8 8 0 0 1 3 20 A8 8 0 0 0 6 19.5 A8 8 0 0 1 0 12 A8 8 0 0 0 3 13 A8 8 0 0 1 2 4' />
          </svg>
        </a>

        <a
          href='https://github.com/davesnx/yolomanifesto.com'
          target='_blank'
          className='github social-media-item'
        >
          or want to propose a change?
          <svg className='icon' viewBox='0 0 32 32'>
            <title>github icon</title>
            <path d='M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z' />
          </svg>
        </a>
      </div>
    </div>
  </footer>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title=''
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
