import React from 'react';
import { Helmet } from 'react-helmet';
import { StylesProvider } from '@material-ui/core/styles';
import styled from 'styled-components';
import Nav from '../navigation/navigation.component';
import { GlobalStyle } from './layout.style';

const Container = styled.main`
  max-width: 1140px;
  margin: 0 auto;
`;

const Layout = (props) => {
  const { children, data, detailPageStyle } = props;

  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <Helmet title='George FE Test'>
        <meta name='description' content='A test for George FE Team' />
        <html lang='en' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        <link
          rel='stylesheet'
          href='https://unpkg.com/tachyons@4/css/tachyons.min.css'
        />
      </Helmet>
      <Nav detailPageStyle={detailPageStyle} data={data} />
      <Container>{children}</Container>
    </StylesProvider>
  );
};

export default Layout;
