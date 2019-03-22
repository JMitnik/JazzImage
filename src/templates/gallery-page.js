import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const GalleryPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
   <div>
       Test
   </div>
  )
}

GalleryPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const GalleryPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <GalleryPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

GalleryPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default GalleryPage

export const galleryPageQuery = graphql`
  query GalleryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
