import React from 'react'
import Link from 'src/components/Link'
import Helmet from 'react-helmet'
import Layout from 'src/components/layout'
import BannerLanding from 'src/components/BannerLanding'

import picJcCode from 'src/assets/images/pic-jc-code.jpg'
import picJcSite from 'src/assets/images/pic-jc-site.jpg'

const website = 'https://www.jeanscentre.be/'
const repo = 'https://github.com/YordanLV/jeanscenter'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Digit Hills - Jeans Centre - Yordan Lasonov</title>
      <meta name="description" content="The making of jeanscentre.be" />
    </Helmet>

    <BannerLanding
      title="JeansCentre.be"
      text="A lightning-fast, large scale, e-commerce web project done with the superpowers of Gatsby and AWS."
    >
      {website && (
        <Link to={website} className="button button--landing">
          View Website
        </Link>
      )}
      {repo && (
        <Link to={repo} className="button button--landing">
          View Repo
        </Link>
      )}
    </BannerLanding>

    <div id="main">
      <section id="one">
        <div className="inner">
          <p> </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        {website && (
          <section>
            <Link to={website} className="image">
              <img src={picJcSite} alt="Website" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>About the project</h3>
                </header>
                <p>
                  Jeans Centre was an already well-established brand in NL and
                  was planning to lunch a brand new e-commerce website for
                  Belgium and a series of other microservices
                  oriented applications. For this purpose, Commercetools was
                  chosen as an e-commerce platform and for the Front-end, I
                  decide to go with Gatsby, which ended being a great choice for
                  both developers and the client. 
                </p>
                <ul className="actions">
                  <li>
                    <Link to={website} className="button">
                      View Website
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
        {repo && (
          <section>
            <Link to={repo} className="image">
              <img src={picJcCode} alt="Code" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>About the code</h3>
                </header>
                <p>
                  I was the team leader of a small FE team and because AWS was
                  the infrastructure of choice, I decided to go with Gatsby
                  instead of other more complex SSR solutions. The rest of our
                  stack was:
                  <br />- Gatsby as already mentioned.
                  <br />- Mobx for state
                  <br />- Emotion for styling
                  <br />- Bootstrap for the grid ( Chosen by the customers  )
                  <br />- Commercetools for e-commerce 
                  <br />- Prismic with GraphQL for CMS
                  <br />
                </p>
                <ul className="actions">
                  <li>
                    <Link to={repo} className="button">
                      View Repo
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        )}
      </section>
    </div>
  </Layout>
)

export default Landing
