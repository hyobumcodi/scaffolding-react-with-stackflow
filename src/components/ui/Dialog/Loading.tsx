import React, { PropsWithChildren } from 'react';
import { Interpolation, Theme } from '@emotion/react';
import { Player } from '@lottiefiles/react-lottie-player';

import animationData from 'static/lottie/loading.json';
import Portal from '../Portal/Portal';
import Background from './Background';
import useDisableScroll from 'hooks/useDisableScroll';

interface Props {
  css?: Interpolation<Theme>;
  opacity?: number;
  isWhite?: boolean;
}

function Loading({ css = {}, opacity = 0.45, isWhite = false, children }: PropsWithChildren<Props>) {
  useDisableScroll();

  return (
    <Portal>
      <Background css={css} opacity={opacity} isWhite={isWhite}>
        <Player
          autoplay
          loop
          src={animationData}
          rendererSettings={{
            preserveAspectRatio: 'xMidYMid slice',
          }}
          css={{ width: '130px' }}
        />
        {children}
      </Background>
    </Portal>
  );
}

export default Loading;
