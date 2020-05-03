import React, { useContext, useEffect } from 'react';
import { Router } from '@reach/router';
import CurrencyList from './currencyList/currencyList.component';
import CurrencyDetail from './currencyDetail/currencyDetail.component';
import { UiContext } from '../context/ui.context';

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
    <Router>
      <CurrencyList path='/' data={filteredCurrencies} />
      <CurrencyDetail data={data} path='detail/:currencyId' />
    </Router>
  );
};

export default App;
