import React from 'react';
import { NavLink } from 'react-router-dom';
import { itemWrap } from './style';

interface TabItemProps {
  href: string;
  label: string;
  icons: {
    default: string;
    active: string;
  };
}

const TabItem: React.FC<TabItemProps> = ({ href, icons, label }) => {
  return (
    <div css={itemWrap}>
      <NavLink to={href} className={({ isActive }) => (isActive ? 'focus' : '')}>
        <img src={icons.default} />
        <img src={icons.active} />
        <div>{label}</div>
      </NavLink>
    </div>
  );
};

export default TabItem;
