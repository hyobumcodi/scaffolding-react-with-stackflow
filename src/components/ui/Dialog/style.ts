import { CSSObject, Theme } from '@emotion/react';

const wrap = ({
  size: {
    height: { header, navbar },
  },
}: Theme): CSSObject => ({
  position: 'fixed',
  top: header,
  left: 0,
  right: 0,
  bottom: navbar,
  zIndex: 1000,
});

const backgroundCover =
  (opacity: number, isWhite: boolean) =>
  ({
    color: {
      gray: { gray0, gray1000 },
    },
    size: {
      height: { header, navbar },
    },
  }: Theme): CSSObject => ({
    background: isWhite ? gray0 : gray1000,
    opacity,
    height: `calc(100vh - ${header} - ${navbar})`,
  });

const background = ({
  size: {
    height: { header, navbar },
  },
}: Theme): CSSObject => ({
  position: 'fixed',
  left: 0,
  top: header,
  right: 0,
  bottom: navbar,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  height: `calc(100vh - ${header} - ${navbar})`,
});

export { wrap, background, backgroundCover };
