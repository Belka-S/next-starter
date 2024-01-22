import ContactLink from '@/components/ContactLink';
import SvgIcon from '@/components/ui/SvgIcon';
import { Typo } from '@/components/ui/Typo';
import { IContactData } from '@/utils/constants/contactData';

import s from './Socials.module.scss';

const socials: Partial<keyof IContactData>[] = [
  'instagram',
  'twitter',
  'facebook',
  'linkedin',
];

const Socials = () => {
  return (
    <div className={s.socials}>
      <Typo el="p">Join</Typo>
      <div className={s.socials__wrap}>
        {socials.map(el => (
          <ContactLink
            key={el}
            className={s.socials__link}
            variant="short"
            source={el}
            target="_blank"
          >
            <SvgIcon id={`contact-${el}`} width={28} height={28} />
          </ContactLink>
        ))}
      </div>
    </div>
  );
};

export default Socials;
