import React, { useContext } from 'react';
import CurrencyItem from '../currencyItem/currencyItem.component';
import { UiContext } from '../../context/ui.context';

const CurrencyList = ({ data }) => {
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
