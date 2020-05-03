import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { navigate } from '@reach/router';
import { UiContext } from '../../context/ui.context';

const StyledAppBar = styled(AppBar)`
  .nav {
    &__main {
      background-color: #212121;
    }

    &__search {
      background-color: grey;
      width: 100%;

      .MuiFilledInput-input {
        padding: 40px 12px 10px;
      }

      .Mui-focused {
        color: white;
      }

      .MuiFilledInput-underline:after {
        border-bottom: 2px solid white;
      }

      &--fixed {
        position: fixed;
        top: 0;
      }
    }
  }
`;

export default function Nav(props) {
  const uiContext = useContext(UiContext);
  const { setSearchField, showOnScroll } = uiContext;
  const { detailPageStyle } = props;

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchField(value);
  };

  return (
    <StyledAppBar position={showOnScroll ? 'fixed' : 'static'}>
      <Toolbar className={showOnScroll ? 'dn' : 'nav nav__main'}>
        <h1>George FE Test</h1>
      </Toolbar>
      <Toolbar
        className={
          showOnScroll
            ? 'nav nav__search nav__search--fixed'
            : 'nav nav__search'
        }
      >
        {detailPageStyle ? (
          <Button variant='contained' onClick={() => navigate('/')}>
            Go back
          </Button>
        ) : (
          <TextField
            // eslint-disable-next-line no-restricted-globals
            onChange={() => handleChange(event)}
            id='filled-basic'
            label='Search'
            variant='filled'
          />
        )}
      </Toolbar>
    </StyledAppBar>
  );
}
