import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

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

export default function Nav() {
  return (
    <StyledAppBar position='static'>
      <Toolbar className='nav nav--main'>
        <h1>George FE Test</h1>
      </Toolbar>
      <Toolbar className='nav nav--search'>
        <TextField id='filled-basic' label='Search' variant='filled' />
      </Toolbar>
    </StyledAppBar>
  );
}
