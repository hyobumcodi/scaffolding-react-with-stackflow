import { CSSObject, Theme } from '@emotion/react';

const wrap: CSSObject = {
  position: 'fixed',
  top: '58px',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 3000,
};

const backgroundCover =
  (opacity: number, isWhite: boolean) =>
  ({
    color: {
      gray: { gray0, gray1000 },
    },
  }: Theme): CSSObject => ({
    background: isWhite ? gray0 : gray1000,
    opacity,
    height: 'calc(100vh - 58px - 64px)',
  });

const background: CSSObject = {
  position: 'fixed',
  left: 0,
  top: '58px',
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  height: 'calc(100vh - 58px- 64px)',
};

export { wrap, background, backgroundCover };
