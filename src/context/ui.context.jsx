import React, { createContext, useState } from 'react';
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
      'https://raw.githubusercontent.com/haikonguyen/george-fe-test/master/src/data/mockData.json'
    );
    const resJson = await response.json();
    const receivedData = resJson;
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
