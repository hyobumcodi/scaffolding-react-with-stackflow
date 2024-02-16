import React, { PropsWithChildren } from 'react';
import Portal from '../Portal/Portal';
import Background from './Background';
import { Interpolation, Theme } from '@emotion/react';
import useDisableScroll from 'hooks/useDisableScroll';

interface Props {
  css?: Interpolation<Theme>;
  opacity?: number;
  isWhite?: boolean;
}

function Loading({ css = {}, opacity = 0.5, isWhite = false, children = 'loading...' }: PropsWithChildren<Props>) {
  useDisableScroll();

  return (
    <Portal>
      <Background css={css} opacity={opacity} isWhite={isWhite}>
        {children}
      </Background>
    </Portal>
  );
}

export default Loading;
