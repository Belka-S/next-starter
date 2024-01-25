'use client';

import classNames from 'classnames';
import { useState } from 'react';

import FeedbackForm from '@/components/FeedbackForm';
import Modal from '@/components/Modal';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import H1 from '@/components/ui/Typography/H1';

import s from './Hero.module.scss';

const Hero = () => {
  const [isModal, setIsModal] = useState(false);
  useState;

  return (
    <>
      <Section className={classNames('container', s.hero)}>
        <H1 fontWeight={900} className={s.hero__title}>
          Effective solutions for your business
        </H1>
        <Button
          className={s.hero__btn}
          size="m"
          label="Order"
          onClick={() => setIsModal(true)}
        />
      </Section>

      {isModal && (
        <Modal className={s.hero__modal} setIsModal={setIsModal}>
          <FeedbackForm setIsModal={setIsModal} />
        </Modal>
      )}
    </>
  );
};

export default Hero;
