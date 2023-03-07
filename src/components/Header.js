import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";

export default function Header() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          description
          title
        }
      }
      bannerimage: file(relativePath: { eq: "banner.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);
  const { title, description } = data.site.siteMetadata;
  const bannerImage = getImage(data.bannerimage.childImageSharp);
  console.log(bannerImage);

  return (
    <HeaderWrapper>
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>Ux designer & web developer</p>
        <Link className="btn" to="/projects/">
          My Portfolio Projects
        </Link>
      </div>
      <GatsbyImage image={bannerImage} alt="Banner" />

      <p>
        {title} - {description}
      </p>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: center;

  h2 {
    font-size: 4em;
  }

  h3 {
    font-size: 3em;
    font-weight: 400;
    margin-bottom: 20px;
  }

  .btn {
    display: inline-block;
    background-color: blue;
    padding: 10px 16px;
    border-radius: 10px;
    margin-top: 20px;
    font-weight: 500;
  }
`;
