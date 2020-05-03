import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import CurrencyItem from '../currencyItem/currencyItem.component';
import Layout from '../layout/layout.component';

const Container = styled.main`
  max-width: 1140px;
  margin: 0 auto;
`;

const CurrencyList = ({ data }) => {
  return (
    <Layout>
      <Container>
        {data &&
          data.map((currencyItem, index) => (
            <Link to={`detail/${currencyItem.currency}`}>
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
            </Link>
          ))}
      </Container>
    </Layout>
  );
};

export default CurrencyList;
