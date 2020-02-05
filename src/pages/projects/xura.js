import React from 'react'
import Link from 'src/components/Link'
import Helmet from 'react-helmet'
import Layout from 'src/components/layout'
import BannerLanding from 'src/components/BannerLanding'

import pic08 from 'src/assets/images/pic08.jpg'
import pic09 from 'src/assets/images/pic09.jpg'

const website = ''
const repo = ''

const mainText =
  'Delivered using Unity / Android via the Samsung Gear VR, I was able to create an untethered interaction model which let the user explore the brand story within a VR environment; where standing in the clouds was made even more memorable by the billowing dry ice on the MWC stand.'
const aboutWebsite = ''
const aboutRepo = ''

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Digit Hills - Jeans Centre - Yordan Lasonov</title>
      <meta name="description" content="The making of jeanscentre.be" />
    </Helmet>

    <BannerLanding
      title="Xura"
      text="A lightning-fast, large scale, eCommerce web project done with the superpowers of Gatsby and AWS."
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
      {mainText && (
        <section id="one">
          <div className="inner">
            <p>{mainText}</p>
          </div>
        </section>
      )}
      <section id="two" className="spotlights">
        {aboutWebsite && (
          <section>
            <Link to={website} className="image">
              <img src={pic08} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>About the project</h3>
                </header>
                <p>{aboutWebsite}</p>
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
        {aboutRepo && (
          <section>
            <Link to={repo} className="image">
              <img src={pic09} alt="" />
            </Link>
            <div className="content">
              <div className="inner">
                <header className="major">
                  <h3>About the code</h3>
                </header>
                <p>
                  Nullam et orci eu lorem consequat tincidunt vivamus et
                  sagittis magna sed nunc rhoncus condimentum sem. In efficitur
                  ligula tate urna. Maecenas massa sed magna lacinia magna
                  pellentesque lorem ipsum dolor. Nullam et orci eu lorem
                  consequat tincidunt. Vivamus et sagittis tempus.
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
