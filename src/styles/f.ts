import { CSSObject, Theme } from '@emotion/react';

const grid: CSSObject = {
  display: 'grid',
};

const flex: CSSObject = {
  display: 'flex',
};

const flexAlignCenter: CSSObject[] = [
  flex,
  {
    alignItems: 'center',
  },
];

const flexJustifyCenter: CSSObject[] = [
  flex,
  {
    justifyContent: 'center',
  },
];

const flexColumn: CSSObject[] = [
  flex,
  {
    flexDirection: 'column',
  },
];

const flex1: CSSObject = {
  flex: 1,
};

const posAbs: CSSObject = {
  position: 'absolute',
};

const posRel: CSSObject = {
  position: 'relative',
};

const top0: CSSObject = {
  top: 0,
};

const left0: CSSObject = {
  left: 0,
};

const fullWidth: CSSObject = {
  width: '100%',
};

const fullHeight: CSSObject = {
  height: '100%',
};

const posAbsFull: CSSObject[] = [posAbs, top0, left0, fullWidth, fullHeight];

const nowrap: CSSObject = {
  whiteSpace: 'nowrap',
};

const resetButton = ({
  color: {
    gray: { gray900 },
  },
}: Theme): CSSObject => ({
  appearance: 'none',
  border: 0,
  padding: 0,
  background: 'none',
  color: gray900,
  textAlign: 'left',
});

const cursorPointer: CSSObject = {
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
};

const overflowHidden: CSSObject = {
  overflow: 'hidden',
  transform: 'translate3d(0, 0, 0)',
  maskImage: '-webkit-radial-gradient(white, black)',
};

const overflowScroll: CSSObject = {
  overflowY: 'scroll',
  WebkitOverflowScrolling: 'touch',
  '::-webkit-scrollbar': {
    display: 'none',
  },
};

const rootLineHeight: CSSObject = {
  lineHeight: '1.15',
};

export {
  grid,
  flex,
  flexAlignCenter,
  flexJustifyCenter,
  flexColumn,
  flex1,
  posRel,
  top0,
  left0,
  fullWidth,
  fullHeight,
  posAbsFull,
  nowrap,
  resetButton,
  cursorPointer,
  overflowHidden,
  overflowScroll,
  rootLineHeight,
};
