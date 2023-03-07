import React from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

export default function ProjectsCategoryPage({ data }) {
  const projects = data.project.nodes;
  const contact = data.contact.siteMetadata.contact;

  return (
    <Layout>
      <ProjectsCategoryPageWrapper>
        <h2>Kategoria Prjekty</h2>
        <h3>Moje realizacje</h3>

        <Projects>
          {projects.map((project) => {
            const image = getImage(
              project.frontmatter.thumbnails.childImageSharp.gatsbyImageData
            );
            return (
              <Link
                to={"/projects/" + project.frontmatter.slug}
                key={project.id}
              >
                <div>
                  <GatsbyImage image={image} alt="abc" className="thumb" />
                  <h4>{project.frontmatter.title}</h4>
                  <p>{project.frontmatter.stack}</p>
                </div>
              </Link>
            );
          })}
        </Projects>

        <p>Do you have any question? Send me message {contact}</p>
      </ProjectsCategoryPageWrapper>
    </Layout>
  );
}

export const query = graphql`
  query ProjectsQuery {
    project: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        html
        id
        frontmatter {
          slug
          stack
          title
          thumbnails {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`;

const ProjectsCategoryPageWrapper = styled.div`
  text-align: center;

  h2 {
    font-size: 3em;
    margin-top: 80px;
  }

  h3 {
    font-size: 2em;
    font-weight: 400;
  }
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 80px;
  margin: 80px 20px;

  h3 {
    text-align: center;
    margin: 20px auto 0px;
    font-weight: 500;
  }

  p {
    color: white;
    margin-top: 4px;
  }

  .thumb {
    max-width: 220px;
    height: 220px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
`;
