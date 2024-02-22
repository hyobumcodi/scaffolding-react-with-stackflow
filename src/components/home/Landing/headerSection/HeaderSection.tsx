import React from 'react';
import { useFlow } from 'stackflow';

import IconSearch from 'static/icons/system/IconSearch';
import IconQRCode from 'static/icons/system/IconQRCode';
import IconBack from 'static/icons/system/IconBack';
import { wrap, title, btn_wrap, registCenter, mobileTicket, banner, bannerTextGroup, bannderIcon } from './style';

const HeaderSection = () => {
  const { push } = useFlow();

  const onClickToRegister = () => push('RegisterCenter', {});

  return (
    <div css={wrap}>
      <h1 css={title}>
        이효범님<b>함께 화이팅해요! 💪🏻</b>
      </h1>
      <div css={btn_wrap}>
        <button css={registCenter} onClick={onClickToRegister}>
          <IconSearch />
          <span>센터등록</span>
        </button>
        <button css={mobileTicket}>
          <IconQRCode />
          <span>모바일 회원증</span>
        </button>
      </div>
      <div
        css={[banner, { cursor: 'pointer' }]}
        onClick={() => {
          window.open('https://smartstore.naver.com/bodycodi/category/4b24fbeb689342f3b06bafb732682e00?cp=1', '_blank');
        }}
      >
        <div css={bannerTextGroup}>
          <p>바디필라테스</p>
          <p>블랙라벨 블랙블랙 레깅스 1+1 반값특가!</p>
        </div>
        <IconBack css={bannderIcon} />
      </div>
    </div>
  );
};

export default HeaderSection;
