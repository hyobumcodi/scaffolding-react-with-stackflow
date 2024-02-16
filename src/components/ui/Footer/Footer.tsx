import React from 'react';
import { wrap, linkWrap } from './style';

function Footer() {
  return (
    <footer css={wrap}>
      <div css={linkWrap}>
        <a>바디코디 블로그</a>
      </div>
      <div css={linkWrap}>
        <a>이용약관</a>
        <a>문의하기</a>
      </div>
    </footer>
  );
}

export default Footer;
