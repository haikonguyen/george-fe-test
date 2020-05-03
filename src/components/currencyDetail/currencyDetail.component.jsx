import React from 'react';
import CurrencyItem from '../currencyItem/currencyItem.component';

const CurrencyDetail = (props) => {
  const { currencyId, data } = props;

  const dynamicPath = data?.filter((path) => {
    return path.currency.includes(currencyId);
  });

  return (
    <>
      {dynamicPath && (
        <CurrencyItem
          currency={dynamicPath[0].currency}
          name={dynamicPath[0].nameI18N}
          flag={`https://www.countryflags.io/${dynamicPath[0].currency.substr(
            0,
            2
          )}/flat/64.png`}
          buy={
            dynamicPath[0]?.exchangeRate?.buy
              ? dynamicPath[0]?.exchangeRate?.buy
              : 'N/A'
          }
          middle={
            dynamicPath[0]?.exchangeRate?.middle
              ? dynamicPath[0]?.exchangeRate?.middle
              : 'N/A'
          }
          sell={
            dynamicPath[0]?.exchangeRate?.sell
              ? dynamicPath[0]?.exchangeRate?.sell
              : 'N/A'
          }
        />
      )}
    </>
  );
};

export default CurrencyDetail;
