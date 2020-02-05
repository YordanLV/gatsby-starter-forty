import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import ArticleTile from '../components/ArticleTile'

import weatherAppPic from '../assets/images/weather-app.jpg'
import jeansCentre from '../assets/images/jeans-centre.jpg'
import solabels from '../assets/images/solabels.jpg'
import geberit from '../assets/images/geberit.jpg'
import nextWordpress from '../assets/images/next-wordpress.jpg'
import xura from '../assets/images/xura.jpg'
import react2048 from '../assets/images/2048.jpg'
import symatec from '../assets/images/symantec.jpg'

const Generic = props => {
  return (
    <Layout>
      <Helmet
        title="Digit Hills - Portfolio - Yordan Lasonov"
        meta={[
          {
            name: 'description',
            content: 'Hire that one developer who is really into hills.',
          },
          { name: 'keywords', content: 'Front-end, React, Redux, Freelancer' },
        ]}
      ></Helmet>

      <Banner />

      <div id="main">
        <section id="one" className="tiles">
          <ArticleTile
            bgImg={weatherAppPic}
            title="Weather App"
            text="React Hooks/Redux Based Weather App"
            link="https://github.com/YordanLV/weather-app"
            skills={['React Hooks', 'Redux', 'Styled']}
            year="2020"
          />
          <ArticleTile
            bgImg={jeansCentre}
            title="JeansCentre.be"
            text="A lightning fast, large scale, Gatsby project for a microservice ecommerce store."
            link="/projects/jeanscentre"
            skills={['Gatsby', 'Mobx', 'GraphQL', 'Prismic', 'AWS']}
            year="2019"
          />
          <ArticleTile
            bgImg={solabels}
            title="SOLabels.com"
            text="A small Gatsby project for a solar label company."
            link="/projects/solabels"
            skills={['React Hooks', 'Prismic', 'GraphQL', 'Styled']}
            year="2019"
          />
          <ArticleTile
            bgImg={nextWordpress}
            title="Next.js Wordpress Starter"
            text="A SSR React starter using wordpress as a headless CMS."
            skills={['Wordpress', 'Next.js', 'Apollo + GraphQL', 'Styled']}
            link="https://github.com/YordanLV/wordpress-nextjs-graphql"
            year="2020"
          />
          <ArticleTile
            bgImg={geberit}
            title="Catalog.Geberit.ch"
            text="A large scale catalog besed on Commercetools."
            skills={[
              'Handlebars',
              'CommerceTools',
              'Gulp',
              'jQuery',
              'SASS',
              'Jenkins',
            ]}
            link="https://catalog.geberit.ch/"
            year="2017 - 2018"
          />
          <ArticleTile
            bgImg={xura}
            title="A unique, immersive 720º VR experience"
            text="Delivered using Unity / Android via the Samsung Gear VR"
            link="/projects/xura"
            skills={['GearVR', 'Unity', 'AfterEffects']}
            position="bottom"
            year="2016"
          />
          <ArticleTile
            bgImg={symatec}
            title="Symantec Interactive Video Panel"
            text="Some ES5 and Canvas magic :)"
            link="https://github.com/YordanLV/Symantec-Canvas-Video"
            skills={['HTML5 Canvas']}
            position="bottom"
            year="2016"
          />
          <ArticleTile
            bgImg={react2048}
            title="A retro twist of the 2048 game"
            text="Done with React, Redux & styled components."
            link="https://github.com/YordanLV/React-2048"
            skills={['React', 'Redux', 'Styled']}
            position="bottom"
            year="2018"
          />
        </section>
        <section id="two">
          <div className="inner">
            <header className="major">
              <h2>That one guy, Yordan</h2>
            </header>
            <p>
              A designer, full-stack(ish) developer and watermelon enthusiast. I
              do various stuff and some of them can be seen above this section.
              In my free time, if any, I play with music, AIs, AIs that make
              music and some other hypes of 2020. 
            </p>
            {/* <ul className="actions">
              <li>
                <Link to="/landing" className="button next">
                  Get Started
                </Link>
              </li>
            </ul> */}
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Generic
