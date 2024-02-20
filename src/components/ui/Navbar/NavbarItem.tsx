import React from 'react';
import { TypeActivities } from 'stackflow';
import { IconType } from 'types';
import { KeyOf } from 'types/utility-types/KeyOf';
import { itemWrap } from './style';

interface TabItemProps {
  activeTab: KeyOf<TypeActivities>;
  href: KeyOf<TypeActivities>;
  label: string;
  Icon: IconType;
  replace: (tab: KeyOf<TypeActivities>) => {
    activityId: string;
  };
}

const TabItem: React.FC<TabItemProps> = ({ activeTab, href, Icon, label, replace }) => {
  return (
    <div css={itemWrap(activeTab === href)}>
      <button onClick={() => replace(href)}>
        <Icon />
        <span>{label}</span>
      </button>
    </div>
  );
};

export default TabItem;
