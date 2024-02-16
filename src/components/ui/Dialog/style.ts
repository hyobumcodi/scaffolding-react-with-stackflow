import { CSSObject, Theme } from '@emotion/react';

const wrap = ({ shadows }: Theme): CSSObject => ({
  position: 'fixed',
  boxShadow: shadows[1],
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 3000,
});

const backgroundCover =
  (opacity: number, isWhite: boolean) =>
  ({
    color: {
      gray: { gray1000, gray0 },
    },
  }: Theme): CSSObject => ({
    background: isWhite ? gray0 : gray1000,
    opacity,
    height: '100vh',
  });

const background: CSSObject = {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  height: '100vh',
};

export { wrap, background, backgroundCover };
