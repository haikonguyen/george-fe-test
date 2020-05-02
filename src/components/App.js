import React from 'react';
import Layout from './layout/layout.component';
import styled from 'styled-components';
import CurrencyList from './currencyList/currencyList.component';

const Container = styled.main`
  max-width: 1140px;
  margin: 0 auto;
`;

function App() {
  return (
    <Layout>
      <Container>
        <CurrencyList />
      </Container>
    </Layout>
  );
}

export default App;
