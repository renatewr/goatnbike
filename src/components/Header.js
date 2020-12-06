import PropTypes from 'prop-types'
import React from 'react'

const Product = ({ node, props }) => (
  <li>
  <a href="javascript:;" onClick={() => {props.onOpenArticle(`${node.slug}`)}}>{node.title.title}</a>
  </li>
)

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
      <h1>{props.home.title}</h1>
      <p>{props.home.leadingText.leadingText}</p>
      </div>
    </div>
    <nav>
    <ul>
            {props.art.map(({ node }, i) => (
                <Product node={node} key={node.id} props={props} />                
              ))}                
            </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
