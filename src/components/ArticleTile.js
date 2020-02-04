import React from 'react'
import { Link } from 'gatsby'

const ArticleTile = ({ bgImg, title, text, link }) => {
  return (
    <article style={{ backgroundImage: `url(${bgImg})` }}>
      <header className="major">
        <h3>{title}</h3>
        <p>{text}</p>
      </header>
      <Link to={link} className="link primary"></Link>
    </article>
  )
}

export default ArticleTile
