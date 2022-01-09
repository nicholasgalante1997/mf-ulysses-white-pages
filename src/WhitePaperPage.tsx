import React from 'react';
import styled from 'styled-components';

const Page = styled.main`
  padding: 16px;
  margin-left: 20vw;
  margin-right: 20vw;
`

const Heading = styled.h2`
  font-size: xx-large;
  color: deeppink;
`

function WhitePaperPage() {
  return (
    <Page>
      <Heading>Home Page</Heading>
    </Page>
  );
}

export default WhitePaperPage;
