import React from 'react';
import styled from 'styled-components';

// Components
import { Layout, Table, Card, Heading1, PageContainer } from '../components';

// Assests
import { merch } from '../../config/content';
import { GRAPHICS } from '../../config/img/graphics';

const Decoration = styled.img`
  position: absolute;
  top: 100px;
  left: 0;
  z-index: -1;
  @media (max-width: 600px) {
    width: 50%;
    height: auto;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 100px;
  margin-top: 30px;
`;

const Merch = () => {
  const { title, headings, body } = merch.SIZE;
  return (
    <Layout>
      <PageContainer>
        <Heading1>Merchandise</Heading1>
        <CardContainer>
          {merch.MERCH.map(({ name, imageUrl, description, price }) => (
            <Card
              key={name}
              name={name}
              imageUrl={imageUrl}
              description={description}
              price={price}
            />
          ))}
        </CardContainer>
        <Table title={title} headings={headings} body={body} />
        <Decoration src={GRAPHICS.TOP_LEFT} alt='ellipse' />
      </PageContainer>
    </Layout>
  );
};

export default Merch;
