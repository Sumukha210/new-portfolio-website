import Title from "@/elements/Title";
import React from "react";
import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { ArticleTypes } from "@/utils/types";
import Card from "./Card";

interface BlogProps {
  articles: null | ArticleTypes[];
}

const Blog: React.FC<BlogProps> = ({ articles }) => {
  return (
    <Wrapper className="margin-top">
      <div className="container">
        <div className="inner-container">
          <Header>
            <Title name="Articles" />
            <h3 className="smallText-1">
              <a
                href="https://dev.to/sumukhakb210"
                target="_blank"
                rel="noreferrer">
                <span>Read More</span>
                <span>
                  <BsArrowRight />
                </span>
              </a>
            </h3>
          </Header>

          <Grid>
            {articles && articles.map(item => <Card key={item.id} {...item} />)}
          </Grid>
        </div>
      </div>
    </Wrapper>
  );
};

export default Blog;

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--text-light);

    svg {
      margin-left: 6px;
      vertical-align: bottom;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
`;
