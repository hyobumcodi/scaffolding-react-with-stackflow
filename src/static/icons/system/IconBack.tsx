import React from 'react';
import { f } from 'styles';

const SVG = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 20.4999L8 12.4999L16 4.49994" stroke="#202020" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const IconBell: React.FC = () => <div css={f.flex} dangerouslySetInnerHTML={{ __html: SVG }} />;

export default IconBell;