import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Layout from './layout/layout.component';
import CurrencyList from './currencyList/currencyList.component';
import { UiContext } from '../context/ui.context';

const Container = styled.main`
  max-width: 1140px;
  margin: 0 auto;
`;

const App = () => {
  const uiContext = useContext(UiContext);
  const { data, fetchFunc, searchField } = uiContext;

  const filteredCurrencies = data?.filter((filteredData) => {
    return filteredData.nameI18N
      ?.toLowerCase()
      .includes(searchField.toLowerCase());
  });

  useEffect(() => {
    fetchFunc();
  }, []);

  return (
    <Layout>
      <Container>
        <CurrencyList data={filteredCurrencies} />
      </Container>
    </Layout>
  );
};

export default App;
