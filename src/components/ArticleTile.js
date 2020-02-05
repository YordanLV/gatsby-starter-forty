import React from 'react'
import Link from '../components/Link'

const testArr = ['item 1', 'item 2']

const ArticleTile = ({
  bgImg,
  title,
  text,
  link,
  position = 'center',
  year,
  skills,
}) => {
  return (
    <article
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: `center ${position}`,
      }}
    >
      <div className="year">{year && <span>{year}</span>}</div>
      <header className="major">
        <h3>{title}</h3>
        <p>{text}</p>
      </header>
      <Link to={link} className="link primary"></Link>
      <div className="skills">
        {skills &&
          skills.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
      </div>
    </article>
  )
}

export default ArticleTile
