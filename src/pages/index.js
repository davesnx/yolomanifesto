import React from 'react'
import Link from 'gatsby-link'

import './home.css'

const Home = () => (
  <div>
    <header className='header'>
      <h1>
        The Yolo
        <span>(Development)</span> Manifesto 🤘
      </h1>
    </header>

    <main>
      <section>
        <article className='description'>
          <p>
            We are uncovering better ways of developing software by doing it and helping others do it. Through this work we have come
            to value:
          </p>

          <div className='list'>
            Individuals and interactions over processes and tools Working software over comprehensive documentation Customer collaboration
            over contract negotiation Responding to change over following a plan
          </div>

          <div className='list-note'>
            That is, while there is value in the items on the right, we value the items on the left more.
          </div>

          <div className='people'>
            <div className='column'>
              Kent Beck Mike Beedle Arie van Bennekum Alistair Cockburn Ward Cunningham Martin Fowler
            </div>
            <div className='column'>
              James Grenning Jim Highsmith Andrew Hunt Ron Jeffries Jon Kern Brian Marick
            </div>
          </div>
        </article>
      </section>

      <Link className='button' to='/principles/'>PRINCIPLES</Link>

    </main>
  </div>
)

export default Home
