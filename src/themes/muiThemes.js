import { createMuiTheme } from '@material-ui/core/styles';

export const muiDark = createMuiTheme({
  palette: {
    primary: { main: '#000000' },
    secondary: {
      main: '#D15B5B',
    },
    type: 'dark',
  },
});

export const muiLight = createMuiTheme({
  palette: {
    primary: { main: '#2e89ff' },
    secondary: {
      main: '#FDD835',
    },
    type: 'light',
  },
});
