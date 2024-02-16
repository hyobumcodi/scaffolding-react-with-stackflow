import { css } from '@emotion/react';
import reset from './reset';

const global = css`
  ${reset.styles}
  button {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
`;

export default global;
