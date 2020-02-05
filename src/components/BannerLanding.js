import React from 'react'

const BannerLanding = ({ children, title, text }) => (
  <section id="banner" className="style2">
    <div className="inner">
      <header className="major">
        <h1>{title}</h1>
      </header>
      <div className="content">
        <p>{text}</p>
      </div>
      {children}
    </div>
  </section>
)

export default BannerLanding
