import React from 'react';
import { ActivityComponentType } from '@stackflow/react';
import { UiComponent } from 'components';
import { useFlow } from 'stackflow';
import { theme } from 'styles';
import { title } from './style';

const Landing: ActivityComponentType = () => {
  const { push } = useFlow();

  const onClick = () => {
    push('MyTicket', {});
  };

  const onClickToRegister = () => push('RegisterCenter', {});

  return (
    <main css={{ padding: '20px' }}>
      <h1 css={title}>this is Landing page (before user loggedin)</h1>
      <UiComponent.Divider color={theme.color.gray.gray400} css={{ margin: '10px auto' }} />
      <button onClick={onClick}>내 이용권</button>
      <UiComponent.Divider color={theme.color.gray.gray400} css={{ margin: '10px auto' }} />
      <button onClick={onClickToRegister}>센터 등록</button>
    </main>
  );
};

export default Landing;
