import React from 'react';
import { Link } from '@reach/router';
import { v4 as uuidv4 } from 'uuid';
import CurrencyItem from '../currencyItem/currencyItem.component';
import Layout from '../layout/layout.component';
// import Container from '../layout/container.component';
import { getFlag } from './currencyFuntions';

const CurrencyList = (props) => {
  const { data, baseCurrency } = props;
  return (
    <Layout>
      <h3>Base Currency: {baseCurrency || 'N/A'}</h3>
      {data &&
        data.map((currencyItem) => (
          <Link
            key={currencyItem.currency}
            to={`detail/${currencyItem.currency}`}
          >
            <CurrencyItem
              currency={currencyItem.currency}
              name={currencyItem.nameI18N ? currencyItem.nameI18N : 'N/A'}
              flag={getFlag(currencyItem.currency)}
              buy={currencyItem?.exchangeRate?.buy || 'N/A'}
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
