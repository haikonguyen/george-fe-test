import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { UiContext } from '../../context/ui.context';

const StyledAppBar = styled(AppBar)`
  .nav {
    &--main {
      background-color: #212121;
    }

    &--search {
      background-color: grey;

      .MuiFilledInput-input {
        padding: 40px 12px 10px;
      }

      .Mui-focused {
        color: white;
      }

      .MuiFilledInput-underline:after {
        border-bottom: 2px solid white;
      }
    }
  }
`;

export default function Nav(props) {
  const uiContext = useContext(UiContext);
  const { setSearchField } = uiContext;

  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
    setSearchField(value);
  };

  return (
    <StyledAppBar position='static'>
      <Toolbar className='nav nav--main'>
        <h1>George FE Test</h1>
      </Toolbar>
      <Toolbar className='nav nav--search'>
        <TextField
          // eslint-disable-next-line no-restricted-globals
          onChange={() => handleChange(event)}
          id='filled-basic'
          label='Search'
          variant='filled'
        />
      </Toolbar>
    </StyledAppBar>
  );
}
