'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

import Logo from '@/components/Logo';
import Button from '@/components/ui/Button';
import SvgIcon from '@/components/ui/SvgIcon';

import BurgerMenu from './BurgerMenu';
import ContactInfo from './ContactInfo';
import s from './Header.module.scss';
import SiteNav from './SiteNav';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={classNames('container', s.header__wrap)}>
        <Link href={'/'}>
          <Logo className={s.header__logo} />
        </Link>

        <SiteNav />
        <ContactInfo />
        <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />

        <Button
          className={s.header__btn}
          size="m"
          variant="transparent"
          onClick={() => setIsOpen(true)}
        >
          <SvgIcon id="menu-burger" width={40} height={40} />
        </Button>
      </div>
    </header>
  );
};

export default Header;
