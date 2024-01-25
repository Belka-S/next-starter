import Link from 'next/link';

import Logo from '@/components/Logo';
import ContactLink from '@/components/ui/ContactLink';
import { IContactData } from '@/utils/constants/contactData';

import s from './Address.module.scss';

const contacts: Partial<keyof IContactData>[] = ['map', 'mail', 'phone'];

const Address = () => {
  return (
    <address className={s.address}>
      <Link href={'/'}>
        <Logo className={s.footer__logo} />
      </Link>

      {contacts.map(el => (
        <ContactLink className={s.address__link} source={el} key={el} />
      ))}
    </address>
  );
};

export default Address;
