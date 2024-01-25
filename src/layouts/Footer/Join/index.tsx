import { CSSProperties } from 'react';

import Socials from '@/components/Socials';
import P from '@/components/ui/Typography/P';

import s from './Join.module.scss';

const Join = () => {
  return (
    <div className={s.join}>
      <P>Join</P>
      <Socials />
    </div>
  );
};

export default Join;
