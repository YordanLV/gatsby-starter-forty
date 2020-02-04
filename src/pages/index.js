import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ArticleTile from '../components/ArticleTile'

import weatherAppPic from '../assets/images/weather-app.jpg'
import jeansCentre from '../assets/images/jeans-centre.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const Generic = props => {
  return (
    <Layout>
      <Helmet
        title="Gatsby Starter - Forty"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      ></Helmet>

      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <ArticleTile
            bgImg={weatherAppPic}
            title="Weather App"
            text="React Hooks/Redux Based Weather App"
            link="/landing"
          />
          <ArticleTile
            bgImg={jeansCentre}
            title="JeansCentre.be"
            text="A lightning fast, large scale Gatsby project for a microservice ecommerce store."
            link="/landing"
          />
          <ArticleTile
            bgImg={weatherAppPic}
            title="Aliquam"
            text="Ipsum dolor sit amet"
            link="/landing"
          />
          <ArticleTile
            bgImg={weatherAppPic}
            title="Aliquam"
            text="Ipsum dolor sit amet"
            link="/landing"
          />
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>Massa libero</h2>
            </header>
            <p>
              Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
              Pellentesque condimentum sem. In efficitur ligula tate urna.
              Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor.
              Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
              libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra
              et feugiat tempus.
            </p>
            <ul className="actions">
              <li>
                <Link to="/landing" className="button next">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Generic
