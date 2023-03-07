import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import styled from "styled-components";

export default function projectDetails({ data }) {
  console.log(data);
  const { title, stack } = data.markdownRemark.frontmatter;
  const contextHTML = data.markdownRemark.html;
  const blogImage = getImage(
    data.markdownRemark.frontmatter.featured.childImageSharp
  );

  return (
    <div>
      <Layout>
        <Details>
          <h2>{title}</h2>
          <h3>{stack}</h3>
          <Featured>
            <GatsbyImage image={blogImage} alt="abc" />
          </Featured>
          <div
            className="html"
            dangerouslySetInnerHTML={{ __html: contextHTML }}
          />
        </Details>
      </Layout>
    </div>
  );
}

// Teraz po wywołaniu szablonu, do zapytania query jest przekazany
// context: { slug: node.frontmatter.slug }, gdzie slug ma szukany alias
// dzieje się to automatycznie, przez co mamy dsotęp, do zawartości
// powiązanego z nim pliku MDX z naszej bazy plików

export const query = graphql`
  query MyQuery($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featured {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, quality: 100)
          }
        }
      }
    }
  }
`;

const Details = styled.div`
  h2 {
    font-size: 3.5rem;
    margin-top: 80px;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
    margin-bottom: 40px;
  }

  .html {
    margin-top: 40px;
  }
`;

const Featured = styled.div`
  margin-bottom: 40px;
`;
