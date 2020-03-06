import React from 'react';
import './nav.scss';

import { Nav_List as items } from './NavList';
import NavItem from './NavItem/';

const Nav = () => {
  return (
    <div className="navbox">
      <div className="navbox__container">
        {items?.map(item => (
          <NavItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Nav;
