import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Nav from '../navigation/navigation.component';
import { GlobalStyle } from './layout.style';
import { DarkTheme, LightTheme } from '../../themes/themes';
import { muiDark, muiLight } from '../../themes/muiThemes';
import { ThemeContext } from '../../context/theme.context';
import { UiContext } from '../../context/ui.context';
import { StylesProvider } from '@material-ui/core/styles';

const Layout = (props) => {
  const { children } = props;
  const themeContext = useContext(ThemeContext);
  const { lightTheme, themeToggler } = themeContext;
  const uiContext = useContext(UiContext);
  const { showOnScroll } = uiContext;

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={DarkTheme}>
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
        <Nav />
        {/* Templates & Pages */}
        {children}
      </ThemeProvider>
    </StylesProvider>
  );
};

export default Layout;
