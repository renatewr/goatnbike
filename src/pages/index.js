import React from 'react'
import Layout from '../components/layout'

import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
import { graphql } from 'gatsby' 

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isArticleVisible: false,
      timeout: false,
      articleTimeout: false,
      article: '',
      loading: 'is-loading'
    }
    this.handleOpenArticle = this.handleOpenArticle.bind(this)
    this.handleCloseArticle = this.handleCloseArticle.bind(this)
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  handleOpenArticle(article) {

    this.setState({
      isArticleVisible: !this.state.isArticleVisible,
      article
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        articleTimeout: !this.state.articleTimeout
      })
    }, 350)

  }

  handleCloseArticle() {

    this.setState({
      articleTimeout: !this.state.articleTimeout
    })

    setTimeout(() => {
      this.setState({
        timeout: !this.state.timeout
      })
    }, 325)

    setTimeout(() => {
      this.setState({
        isArticleVisible: !this.state.isArticleVisible,
        article: ''
      })
    }, 350)

  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (this.state.isArticleVisible) {
        this.handleCloseArticle();
      }
    }
  }

  render() {
    const art = this.props.data.art.edges;
    const siteDescription = this.props.data.siteMetadata.edges[0].node.metaDescription
    const homepage = this.props.data.siteMetadata.edges[0].node
    const siteTitle = this.props.data.siteMetadata.edges[0].node.metaTitle
    const gbBackgroundImage = this.props.data.siteMetadata.edges[0].node.backgroundImages[0].file.url

    return (
      <Layout location={this.props.location}>
        <div className={`body ${this.state.loading} ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
          <div id="wrapper">
            <Header onOpenArticle={this.handleOpenArticle} timeout={this.state.timeout} art={art} home={homepage}/>
            <Main
              isArticleVisible={this.state.isArticleVisible}
              timeout={this.state.timeout}
              articleTimeout={this.state.articleTimeout}
              article={this.state.article}
              onCloseArticle={this.handleCloseArticle}
              setWrapperRef={this.setWrapperRef}
              art={art}
            />
            <Footer timeout={this.state.timeout} />
          </div>
          
          <div id="bg" style={{backgroundImage: "url(" + gbBackgroundImage + ")", backgroundPosition : '50% 10%'}}></div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query PageQuery {
      art:allContentfulPost {
        edges {
          node {
            id
            slug
            title {
              title
            }
            body{
              childMarkdownRemark{
                html
              }
            }
            featuredImage {
              fluid(maxWidth: 980) {
               ...GatsbyContentfulFluid
              }
              fixed(width: 600) {
                width
                height
                src
                srcSet
              }
            }
          }
        }
      },
      siteMetadata:allContentfulHome {
        edges {
          node {
            id
            title
            metaTitle
            metaDescription
            leadingText{
              leadingText
            }
            backgroundImages{
              file {
                url
              }
              fluid(maxWidth: 2800) {
                ...GatsbyContentfulFluid
              }
            }
            logo {
              file {
                url
              }
              }
          }
        }
      }
  }
`
