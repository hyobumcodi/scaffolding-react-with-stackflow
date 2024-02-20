import { CSSObject } from '@emotion/react';
import { f } from 'styles';

const wrapper = [f.posAbsFull, f.flexColumn, f.rootLineHeight];

const scrollable: CSSObject[] = [
  f.flex1,
  f.overflowScroll,
  {
    paddingTop: '56px',
    paddingBottom: '64px',
  },
];

export { wrapper, scrollable };
