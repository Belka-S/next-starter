'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import s from './SiteNav.module.scss';

interface ISiteNavProps {
  styleNav?: string;
  styleLink?: string;
}

const SiteNav: FC<ISiteNavProps> = ({ styleNav, styleLink }) => {
  const pathname = usePathname();

  const setClassName = (path: string) => {
    return classNames(
      styleLink ? styleLink : s.nav__link,
      pathname === path && s.active,
    );
  };

  // ContactPage height
  if (typeof window !== 'undefined') {
    const bodyEl = document.querySelector('body');
    if (bodyEl) {
      bodyEl.style.height = pathname === '/contacts' ? '100vh' : '';
    }
  }

  return (
    <nav className={styleNav ? styleNav : s.nav}>
      <Link className={setClassName('/')} href={'/'}>
        Studio
      </Link>
      <Link className={setClassName('/portfolio')} href={'/portfolio'}>
        Portfolio
      </Link>
      <Link className={setClassName('/contacts')} href={'/contacts'}>
        Contacts
      </Link>
    </nav>
  );
};

export default SiteNav;
