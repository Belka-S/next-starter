import classNames from 'classnames';
import { FC } from 'react';

import ContactLink, { ContactLinkVariant } from '@/components/ui/ContactLink';
import SvgIcon from '@/components/ui/SvgIcon';
import { IContactData } from '@/utils/constants/contactData';

import s from './Socials.module.scss';

const socials: Partial<keyof IContactData>[] = [
  'instagram',
  'twitter',
  'facebook',
  'linkedin',
];

interface ISocialsProps {
  className?: string;
  linkClassName?: string;
  variant?: ContactLinkVariant;
}

const Socials: FC<ISocialsProps> = ({ variant, className, linkClassName }) => {
  return (
    <div className={classNames(s.contacts, className)}>
      {socials.map(el => (
        <ContactLink
          key={el}
          className={linkClassName ? linkClassName : s.socials__link}
          variant={variant ? variant : 'short'}
          source={el}
          target="_blank"
        >
          <SvgIcon id={`contact-${el}`} width={28} height={28} />
        </ContactLink>
      ))}
    </div>
  );
};

export default Socials;
