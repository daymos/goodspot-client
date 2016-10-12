// @flow
import React, { PropTypes } from 'react';
import HeaderBar from './header_bar';
import { MuiTheme } from '../flow_types';

const containerStyles = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-top',
  alignItems: 'center',
};


const Splash = (_: void, { muiTheme: { palette } }: MuiTheme) =>
  <div
    style={{
      ...containerStyles,
      backgroundColor: palette.canvasColor,
    }}
  >
    <HeaderBar />
    <span>done like a kipper!</span>
    {/* <LogoutButton /> */}
  </div>;

Splash.contextTypes = {
  muiTheme: PropTypes.object.isRequired,
};

export default Splash;
