import React from 'react'
import Link from 'src/components/Link'
import Helmet from 'react-helmet'
import Layout from 'src/components/layout'
import BannerLanding from 'src/components/BannerLanding'

const website = ''
const repo = ''

const mainText =
  'While working for Enigma Marketing, using Unity / Android via the Samsung Gear VR, I was able to create an untethered interaction model which let the user explore the brand story within a VR environment; where standing in the clouds was made even more memorable by the billowing dry ice on the MWC stand.'

const Landing = props => (
  <Layout>
    <Helmet>
      <title>Digit Hills - Jeans Centre - Yordan Lasonov</title>
      <meta name="description" content="The making of XURA 720 Experience" />
    </Helmet>

    <BannerLanding
      title="Xura"
      text="Delivered using Unity / Android via the Samsung Gear VR."
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
            <div className="fluid-video-wrapper">
              <iframe
                src="https://player.vimeo.com/video/264081827?loop=false&amp;autoplay=false&amp;muted=false&amp;gesture=media&amp;playsinline=true&amp;byline=false&amp;portrait=false&amp;title=false&amp;speed=true&amp;transparent=false"
                allowfullscreen=""
                allowtransparency=""
                allow="autoplay"
                title="Player for Xura - Casestudy Video"
                data-ready="true"
                tabindex="-1"
              ></iframe>
            </div>
          </div>
        </section>
      )}
    </div>
  </Layout>
)

export default Landing
