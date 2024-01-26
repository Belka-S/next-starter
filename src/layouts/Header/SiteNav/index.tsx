'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import s from './SiteNav.module.scss';

interface ISiteNavProps {
  className?: string;
  linkClassName?: string;
}

const SiteNav: FC<ISiteNavProps> = ({ className, linkClassName }) => {
  const pathname = usePathname();
  // ContactPage height
  if (typeof window !== 'undefined') {
    const bodyEl = document.querySelector('body');
    if (bodyEl) {
      bodyEl.style.height = pathname === '/contacts' ? '100vh' : '';
    }
  }

  const setClassName = (path: string) => {
    return classNames(
      linkClassName ? linkClassName : s.nav__link,
      pathname === path && s.active,
    );
  };

  return (
    <nav className={classNames(s.nav, className)}>
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
