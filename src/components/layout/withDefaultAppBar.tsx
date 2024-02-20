import React from 'react';
import { useFlow } from 'stackflow';

import IconBell from 'static/icons/system/IconBell';
import IconLogo from 'static/icons/system/IconLogo';
import IconDefaultProfile from 'static/icons/system/IconDefaultProfile';
import { left, right } from './style';

const withDefaultAppBar = () => {
  const { push, replace } = useFlow();

  const appBarLeft = () => (
    <div css={left}>
      <IconLogo />
    </div>
  );

  const appBarRight = () => (
    <div css={right}>
      <IconBell onClick={() => push('Alarm', {})} />
      <IconDefaultProfile />
    </div>
  );

  return {
    replace,
    defaultAppBar: {
      renderLeft: appBarLeft,
      renderRight: appBarRight,
    },
  };
};

export default withDefaultAppBar;
