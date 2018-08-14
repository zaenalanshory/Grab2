import { NavBar, Icon } from 'antd-mobile';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Drawerss from './Drawer';

class Navbar extends Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
          icon={
            <Link to="/">
              <Icon type="left" />
            </Link>
          }
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon
              key="0"
              type="shopping-cart"
              style={{ marginRight: '16px', color: 'blue' }}
            />,
            <Icon key="1" type="ellipsis">
              <Drawerss />
            </Icon>
          ]}>
          GrabFood
        </NavBar>
      </div>
    );
  }
}

export default Navbar;
