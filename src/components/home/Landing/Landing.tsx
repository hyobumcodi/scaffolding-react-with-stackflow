import React, { useReducer } from 'react';
import { useCheckSignin } from 'hooks';
import { UiComponent } from 'components';
import { HeaderSection } from './headerSection';
import { RequestPayment } from './requestPayment';
import { RecommendTicket } from './recommendTicket';
import { ReservedClass } from './reservedClass';
import { MyTicket } from './myTicket';
import { BeginningBottomSheet } from './bottomSheet';
import useDidMount from 'hooks/useDidMount';

const Landing = () => {
  const { isLoading } = useCheckSignin();
  const [show, toggle] = useReducer((c) => !c, false);

  useDidMount(() => {
    const timer = setTimeout(() => {
      toggle();
    }, 1200);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {isLoading && <UiComponent.Loading isWhite opacity={1} />}
      <main>
        <HeaderSection />
        <RequestPayment />
        <RecommendTicket />
        <ReservedClass />
        <MyTicket />
      </main>
      <BeginningBottomSheet isShowing={show} onClose={toggle} />
    </>
  );
};

export default Landing;
