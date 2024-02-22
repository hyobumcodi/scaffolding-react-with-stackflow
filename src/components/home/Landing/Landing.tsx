import React from 'react';
import { useFlow } from 'stackflow';
import { useCheckSignin } from 'hooks';
import { HeaderSection } from './headerSection';
import { RequestPayment } from './requestPayment';
import { RecommendTicket } from './recommendTicket';

const Landing = () => {
  const { push } = useFlow();

  const onClick = () => {
    push('MyTicket', {});
  };

  const onClickToRegister = () => push('RegisterCenter', {});

  const { isLoading } = useCheckSignin();

  return (
    <main>
      <HeaderSection />
      <RequestPayment />
      <RecommendTicket />
      <HeaderSection />
      <RequestPayment />
      <RecommendTicket />
      <HeaderSection />
      <RequestPayment />
      <RecommendTicket />
    </main>
  );
};

export default Landing;
