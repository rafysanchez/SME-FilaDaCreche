import React from 'react';
import STRINGS from 'configs/Strings';
import logo from 'assets/images/logo.svg';
import logoImg from 'assets/images/logo.png';

export class Logo extends React.Component {
  render() {
    return (
      <div className="logo-banner text-center">
        <img src={logoImg} alt={STRINGS.site.tag_line} style={{width: '100%'}}/>
      </div>
    );
  }
}
