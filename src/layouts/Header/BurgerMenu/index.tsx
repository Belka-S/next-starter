import classNames from 'classnames';

import Socials from '@/components/Socials';
import SvgIcon from '@/components/ui/SvgIcon';

import ContactInfo from '../ContactInfo';
import SiteNav from '../SiteNav';
import s from './BurgerMenu.module.scss';

interface IBurgerMenyProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BurgerMenu = ({ isOpen, setIsOpen }: IBurgerMenyProps) => {
  return (
    <div className={classNames(s.backdrop, isOpen && s['is-open'])}>
      <div className={s.burger}>
        <button
          className={s.button}
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <SvgIcon id="ui-cross" width={40} height={40} />
        </button>

        <div onClick={() => setIsOpen(false)}>
          <SiteNav className={s.nav} linkClassName={s.nav__link} />
        </div>
        <ContactInfo className={s.contacts} linkClassName={s.contacts__link} />

        <Socials
          variant="title"
          className={s.socials}
          linkClassName={s.socials__link}
        />
      </div>
    </div>
  );
};

export default BurgerMenu;
