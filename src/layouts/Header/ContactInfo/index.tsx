import classNames from 'classnames';
import React, { FC } from 'react';

import ContactLink from '@/components/ui/ContactLink';
import SvgIcon from '@/components/ui/SvgIcon';
import { IContactData } from '@/utils/constants/contactData';

import s from './ContactInfo.module.scss';

interface IContactInfoProps {
  className?: string;
  linkClassName?: string;
}

const contacts: Partial<keyof IContactData>[] = ['mail', 'phone'];

const ContactInfo: FC<IContactInfoProps> = ({ className, linkClassName }) => {
  return (
    <div className={classNames(s.contacts, className)}>
      {contacts.map(el => (
        <ContactLink
          className={linkClassName ? linkClassName : s.contacts__link}
          source={el}
          key={el}
        >
          <SvgIcon id={`contact-${el}`} className={s.contacts__icon} />
        </ContactLink>
      ))}
    </div>
  );
};

export default ContactInfo;
