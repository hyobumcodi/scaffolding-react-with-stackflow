import { CSSObject, Theme } from '@emotion/react';
import { DividerOrientationType, DividerThicknessType, SizeWithPercentType, SizeWithPxType } from 'types';

const borderStyle =
  (
    orientation?: DividerOrientationType,
    variant?: React.CSSProperties['borderColor'],
    thickness?: DividerThicknessType,
    size?: SizeWithPxType | SizeWithPercentType,
    color?: string,
  ) =>
  ({
    color: {
      gray: { gray200 },
    },
  }: Theme): CSSObject => ({
    borderColor: color || gray200,
    borderStyle: variant,
    ...(orientation === 'horizontal'
      ? {
          width: size,
          borderWidth: `0 0 ${thickness === 'thin' ? 1 : 10}px 0`,
        }
      : {
          height: size,
          borderWidth: `0 0 0 ${thickness === 'thin' ? 1 : 10}px`,
        }),
  });

export { borderStyle };
