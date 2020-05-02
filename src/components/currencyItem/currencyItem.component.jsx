import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import testFlag from '../../img/vn.png';

const StyledDiv = styled.div`
  .paperWrap {
    margin: 20px 0;
    padding: 20px;
  }
  .flagSection {
    border: 1px solid rgb(221, 221, 221);
    padding: 10px;

    .currencies {
      margin-left: 30px;
    }
  }

  .exchangeSection {
    border: 1px solid rgb(221, 221, 221);
  }
`;

const CurrencyItem = (props) => {
  const { flag, currency, name, buy, middle, sell } = props;
  return (
    <StyledDiv>
      <Paper className='paperWrap flex justify-between' elevation={3}>
        <section className='flagSection flex items-center'>
          <div className='flags'>
            <img src={flag} alt='flags' />
          </div>
          <div className='currencies'>
            <div>{currency}</div>
            <div>{name}</div>
          </div>
        </section>
        <section className='exchangeSection'>
          <div>
            {/* <div>{buy}</div>
            <div>{middle}</div>
            <div>{sell}</div> */}
          </div>
        </section>
      </Paper>
    </StyledDiv>
  );
};

export default CurrencyItem;
