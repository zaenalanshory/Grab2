import React, { Component } from 'react';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import '../css/Style.css';

class BarCari extends Component {
  state = {
    value: '美食'
  };

  onChange = value => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  };
  render() {
    return (
      <div>
        <SearchBar placeholder="Kau nak makan ape?" maxLength={8} />
      </div>
    );
  }
}

export default BarCari;
