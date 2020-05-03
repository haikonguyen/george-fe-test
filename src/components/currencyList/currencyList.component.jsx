import React from 'react';
import { Link } from '@reach/router';
import { v4 as uuidv4 } from 'uuid';
import CurrencyItem from '../currencyItem/currencyItem.component';
import Layout from '../layout/layout.component';
// import Container from '../layout/container.component';

const CurrencyList = ({ data }) => {
  return (
    <Layout>
      {data &&
        data.map((currencyItem) => (
          <Link key={uuidv4()} to={`detail/${currencyItem.currency}`}>
            <CurrencyItem
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
          </Link>
        ))}
    </Layout>
  );
};

export default CurrencyList;
