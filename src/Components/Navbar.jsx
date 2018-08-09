import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />
          ]}>
          GrabFood
        </NavBar>
      </div>
    );
  }
}

export default Navbar;
