import React, { createContext, useState, useEffect } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const initialState = {
  showOnScroll: false,
  isNotHomePage: () => {},
};

export const UiContext = createContext(initialState);

const UiContextProvider = (props) => {
  const { children } = props;
  const [showOnScroll, setShowOnScroll] = useState(false);
  const [data, setData] = useState(null);
  const [searchField, setSearchField] = useState('');

  useScrollPosition(({ currPos }) => {
    currPos.y < -150 ? setShowOnScroll(true) : setShowOnScroll(false);
  });

  const fetchFunc = async () => {
    const response = await fetch(
      'https://raw.githubusercontent.com/keriati/george-fx-test/master/fx.json'
    );
    const resJson = await response.json();
    const mainCurrency = resJson.baseCurrency;
    const receivedData = resJson.fx;
    setData(receivedData);
  };

  return (
    <UiContext.Provider
      value={{
        showOnScroll,
        data,
        setData,
        searchField,
        setSearchField,
        fetchFunc,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
