'use client';

import classNames from 'classnames';
import { useState } from 'react';

import Modal from '@/components/Modal';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Typo } from '@/components/ui/Typo';

import s from './Hero.module.scss';

const Hero = () => {
  const [isModal, setIsModal] = useState(false);
  useState;

  return (
    <Section className={classNames('container', s.hero)}>
      <Typo el="h1" fontWeight={900} className={s.hero__title}>
        Effective solutions for your business
      </Typo>
      <Button
        className={s.hero__button}
        size="m"
        label="Order"
        onClick={() => setIsModal(true)}
      />
      {isModal && <Modal onClick={() => setIsModal(false)}>qwe</Modal>}
    </Section>
  );
};

export default Hero;
