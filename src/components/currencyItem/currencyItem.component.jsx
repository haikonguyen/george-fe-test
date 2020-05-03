import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

const StyledDiv = styled.div`
  .paperWrap {
    margin: 20px 0;
    padding: 5px;
  }
  .flagSection {
    padding: 10px;

    @media (--breakpoint-medium) {
      min-width: 220px;
      border: 1px solid rgb(221, 221, 221);
    }

    &__row {
      margin: 5px 0;
    }

    .currencies {
      margin-left: 30px;
    }
  }

  .exchangeSection {
    padding: 10px;

    &__row {
      margin: 5px 0;
    }

    h3 {
      margin: 0;
    }

    @media (--breakpoint-medium) {
      border: 1px solid rgb(221, 221, 221);
    }
  }
`;

const CurrencyItem = (props) => {
  const { flag, currency, name, buy, middle, sell, detailPageStyle } = props;
  return (
    <StyledDiv>
      <Paper
        className={
          detailPageStyle
            ? 'paperWrap flex flex-column'
            : 'paperWrap flex flex-column flex-row-l justify-between'
        }
        elevation={3}
      >
        <section className='flagSection flex items-center'>
          <div className='flags'>
            <img src={flag} alt='flags' />
          </div>
          <div className='currencies'>
            <div className='flagSection__row'>{currency}</div>
            <div className='flagSection__row'>{name}</div>
          </div>
        </section>
        <section className='exchangeSection'>
          <div>
            <h3>Exchange Rates:</h3>
            <div className='exchangeSection__row flex justify-between'>
              <span>Buy:</span>
              <span>{buy}</span>
            </div>
            <div className='exchangeSection__row flex justify-between'>
              <span>Middle:</span>
              <span>{middle}</span>
            </div>
            <div className='exchangeSection__row flex justify-between'>
              <span>Sell:</span>
              <span>{sell}</span>
            </div>
          </div>
        </section>
      </Paper>
    </StyledDiv>
  );
};

export default CurrencyItem;
