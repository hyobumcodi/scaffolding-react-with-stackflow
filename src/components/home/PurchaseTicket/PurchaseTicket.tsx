import React from 'react';
import { UiComponent } from 'components';
import { theme } from 'styles';
import { title } from './style';

const PurchaseTicket = () => {
  return (
    <main css={{ padding: '20px' }}>
      <h1 css={title}>this is PurchaseTicket page (before user loggedin)</h1>
      <UiComponent.Divider color={theme.color.gray.gray400} css={{ margin: '10px auto' }} />
    </main>
  );
};

export default PurchaseTicket;
