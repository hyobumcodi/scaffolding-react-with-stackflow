import React from 'react';
import { useCheckSignin } from 'hooks';
import { UiComponent } from 'components';
import { HeaderSection } from './headerSection';
import { RequestPayment } from './requestPayment';
import { RecommendTicket } from './recommendTicket';
import { ReservedClass } from './reservedClass';
import { MyTicket } from './myTicket';

const Landing = () => {
  const { isLoading } = useCheckSignin();

  return (
    <main>
      <HeaderSection />
      <RequestPayment />
      <RecommendTicket />
      <ReservedClass />
      <MyTicket />
      {isLoading && <UiComponent.Loading isWhite opacity={1} />}
    </main>
  );
};

export default Landing;
