'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import IconSvg from '@/components/ui/IconSvg';
import { Typo } from '@/components/ui/Typo';

import s from './Subscribe.module.scss';

type Inputs = { email: string };

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => console.log(data, errors);

  return (
    <div className={s.subscribe}>
      <Typo el="p" fontWeight={700}>
        Subscribe
      </Typo>

      <form className={s.subscribe__form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', { required: true })}
          className={s.subscribe__input}
          placeholder="E-mail"
          autoComplete="off"
        />

        <Button
          className={s.subscribe__button}
          type="submit"
          size="m"
          label="Subscribe"
        >
          <IconSvg svgId="contact-telegram" width={32} height={32} />
        </Button>
      </form>
    </div>
  );
};

export default Subscribe;