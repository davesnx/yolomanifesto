import React from 'react'
import Link from 'gatsby-link'

import './principles.css'

const Principles = () => (
  <div>
    <header className='header'>
      <h2>Principles behind</h2>
      <h1>
        The Yolo
        <span>(Development)</span> Manifesto 🤘
      </h1>
    </header>

    <main>
      <p className='principles-title'>We follow these principles:</p>

      <section className='principle-list'>
        <article className='principle'>
          <p>
            Our highest priority is to satisfy the customer through early and
            continuous delivery of valuable software.
          </p>
        </article>

        <article className='principle'>
          <p>
            Welcome changing requirements, even late in development. Agile
            processes harness change for the customer's competitive advantage.
          </p>
        </article>

        <article className='principle'>
          <p>
            Deliver working software frequently, from a couple of weeks to a
            couple of months, with a preference to the shorter timescale.
          </p>
        </article>

        <article className='principle'>
          <p>
            Business people and developers must work together daily throughout
            the project.
          </p>
        </article>

        <article className='principle'>
          <p>
            Build projects around motivated individuals. Give them the
            environment and support they need, and trust them to get the job
            done.
          </p>
        </article>

        <article className='principle'>
          <p>
            The most efficient and effective method of conveying information to
            and within a development team is face-to-face conversation.
          </p>
        </article>

        <article className='principle'>
          <p>Working software is the primary measure of progress.</p>
        </article>

        <article className='principle'>
          <p>
            Agile processes promote sustainable development. The sponsors,
            developers, and users should be able to maintain a constant pace
            indefinitely.
          </p>
        </article>

        <article className='principle'>
          <p>
            Continuous attention to technical excellence and good design
            enhances agility.
          </p>
        </article>

        <article className='principle'>
          <p>
            Simplicity--the art of maximizing the amount of work not done--is
            essential.
          </p>
        </article>

        <article className='principle'>
          <p>
            The best architectures, requirements, and designs emerge from
            self-organizing teams.
          </p>
        </article>

        <article className='principle'>
          <p>
            At regular intervals, the team reflects on how to become more
            effective, then tunes and adjusts its behavior accordingly.
          </p>
        </article>
      </section>

      <Link className='link' to='/'>
        ⟵ MANIFESTO
      </Link>
    </main>
  </div>
)

export default Principles
