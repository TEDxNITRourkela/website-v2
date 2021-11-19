import React from 'react';
import styled from 'styled-components';

// Components
import { Layout, Table, Card, Heading1 } from '../components';

// Assests
import { merch } from '../../config/content';

const Container = styled.div`
  max-width: 100vw;
  height: auto;
  min-height: 100vh;
  padding-top: 80px;
  margin: 80px 5% 130px;
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
      <Container>
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
      </Container>
    </Layout>
  );
};

export default Merch;
