import React, { useEffect, useState } from 'react';
import CurrencyItem from '../currencyItem/currencyItem.component';

const CurrencyList = () => {
  const [data, setData] = useState(null);

  const fetchFunc = async () => {
    const response = await fetch(
      'https://raw.githubusercontent.com/keriati/george-fx-test/master/fx.json'
    );
    const resJson = await response.json();
    const mainCurrency = resJson.baseCurrency;
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
            buy={
              currencyItem?.exchangeRate?.buy
                ? currencyItem?.exchangeRate?.buy
                : 'N/A'
            }
            middle={
              currencyItem?.exchangeRate?.middle
                ? currencyItem?.exchangeRate?.middle
                : 'N/A'
            }
            sell={
              currencyItem?.exchangeRate?.sell
                ? currencyItem?.exchangeRate?.sell
                : 'N/A'
            }
          />
        ))}
    </>
  );
};

export default CurrencyList;
