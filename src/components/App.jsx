import React, { useContext, useEffect } from 'react';
import { Router } from '@reach/router';
import CurrencyList from './currencyList/currencyList.component';
import CurrencyDetail from './currencyDetail/currencyDetail.component';
import { UiContext } from '../context/ui.context';

const App = () => {
  const uiContext = useContext(UiContext);
  const { data, fetchFunc, searchField } = uiContext;
  const fxData = data?.fx;
  const baseCurrency = data?.baseCurrency;

  const filteredCurrencies = fxData?.filter((filteredData) => {
    return filteredData.nameI18N
      ?.toLowerCase()
      .includes(searchField.toLowerCase());
  });

  useEffect(() => {
    fetchFunc();
  }, []);

  return (
    <Router>
      <CurrencyList
        path='/'
        baseCurrency={baseCurrency}
        data={filteredCurrencies}
      />
      <CurrencyDetail data={fxData} path='detail/:currencyId' />
    </Router>
  );
};

export default App;
