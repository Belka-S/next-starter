import { CSSProperties } from 'react';

import Socials from '@/components/Socials';
import Typo from '@/components/ui/Typo';

import s from './Join.module.scss';

const Join = () => {
  return (
    <div className={s.join}>
      <Typo el="p">Join</Typo>
      <Socials />
    </div>
  );
};

export default Join;
