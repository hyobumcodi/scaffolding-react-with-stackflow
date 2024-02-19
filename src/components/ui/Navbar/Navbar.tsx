import React from 'react';

import TabItem from './NavbarItem';
import { BOTTOM_NAVBAR_LIST } from 'data';
import { content, shadowWrap, wrap } from './style';

const BottomNavbar = () => {
  return (
    <nav css={wrap}>
      <div css={shadowWrap}>
        <div css={content}>
          {BOTTOM_NAVBAR_LIST.map((item, index) => {
            return <TabItem key={index} href={item?.href} icons={item?.icons} label={item?.label} />;
          })}
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
