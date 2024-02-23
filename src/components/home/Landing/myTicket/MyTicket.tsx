import React from 'react';
import { useFlow } from 'stackflow';

import IconMyTicket from 'static/icons/system/IconMyTicket';
import {
  wrap,
  headSection,
  title,
  tickets_wrap,
  info_wrap,
  card_wrap,
  times,
  lesson_name,
  package_info,
} from './style';

import IconGoto from 'static/icons/mocks/IconGoto';

const MyTicket = () => {
  const { push } = useFlow();

  const onClickToRegister = () => push('MyTicket', {});

  return (
    <div css={wrap}>
      <div css={headSection}>
        <h1 css={title}>
          <IconMyTicket />
          <span>
            보유한 이용권 <b>3</b>
          </span>
        </h1>
        <button onClick={onClickToRegister}>더보기</button>
      </div>
      <div css={tickets_wrap}>
        <div css={info_wrap}>
          <IconGoto />
          <span>고투피트니스</span>
          <p>이용중</p>
        </div>
        <div css={card_wrap}>
          <div css={package_info}>
            <span>그룹</span>
            <span>·</span>
            <span>바디코디 교대점</span>
          </div>
          <div css={lesson_name}>
            <span>필라테스 중급 필라테스 중급...</span>
          </div>
          <div css={times}>
            <span>2.21 (수)</span>
            <span>오전 11:00 - 11:50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTicket;
