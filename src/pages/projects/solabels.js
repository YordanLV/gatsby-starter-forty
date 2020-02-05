import React from 'react'
import Link from 'src/components/Link'
import Helmet from 'react-helmet'
import Layout from 'src/components/layout'
import BannerLanding from 'src/components/BannerLanding'

import picJcCode from 'src/assets/images/pic-jc-site.jpg'
import picSolabelsSite from 'src/assets/images/pic-solables-site.jpg'

const website = 'https://solabels.com/'
const repo = ''

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Digit Hills - SOlabels - Yordan Lasonov</title>
      <meta name="description" content="The making of SOlabels.com" />
    </Helmet>

    <BannerLanding
      title="SOlabels.com"
      text="A lightning-fast, CMS based buisness website hosted on netlify."
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
              <img src={picSolabelsSite} alt="Website" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>About the project</h3>
                </header>
                <p>
                  SOlabels is a newly founded startup for solar label cables.
                  They approached me that they need something simple that can
                  represent their business well. For this project, I took the
                  role of both designer and developer and delivered a slick and
                  fast Gatsby website, hosted on Netlify with CI/CD and using
                  Prismic as a headless CMS. Using these two services for FREE
                  brings the total cost of hosting the website to 15 dollars a
                  year, paying just for the domain. 
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
                <p>Lorem</p>
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
