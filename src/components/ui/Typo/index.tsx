import classNames from 'classnames';
import { createElement, FC, PropsWithChildren } from 'react';

import styles from './Typo.module.scss';

const weightNames = {
  100: 'thin',
  200: 'extraLight',
  300: 'light',
  400: 'regular',
  500: 'medium',
  600: 'semiBold',
  700: 'bold',
  800: 'extraBold',
  900: 'black',
};

export type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

interface ITypoProps extends PropsWithChildren {
  el: Element;
  fontWeight?: FontWeight;
  className?: string;
}

const Typo: FC<ITypoProps> = props => {
  const { className = '', el, fontWeight = 700, children } = props;

  return createElement(
    el,
    {
      className: classNames(
        styles[el],
        styles[weightNames[fontWeight]],
        className,
      ),
    },
    children,
  );
};

export default Typo;
