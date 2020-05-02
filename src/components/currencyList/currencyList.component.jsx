import React, { useEffect, useState } from 'react';
import { Divider } from '@material-ui/core';
import CurrencyItem from '../currencyItem/currencyItem.component';

//https://api.randomuser.me/

const CurrencyList = () => {
  const [data, setData] = useState(null);

  const fetchFunc = async () => {
    const response = await fetch(
      'https://raw.githubusercontent.com/keriati/george-fx-test/master/fx.json'
    );
    const resJson = await response.json();
    const data = resJson.fx;
    setData(data);
  };

  useEffect(() => {
    fetchFunc();
  }, []);

  return (
    <>
      {data &&
        data.map((currencyItem, index) => (
          <CurrencyItem
            key={index}
            currency={currencyItem.currency}
            name={currencyItem.nameI18N ? currencyItem.nameI18N : 'N/A'}
            flag={`https://www.countryflags.io/${currencyItem.currency.substr(
              0,
              2
            )}/flat/64.png`}
            // buy={currencyItem.banknoteRate.buy}
          />
        ))}
    </>
  );
};

export default CurrencyList;
