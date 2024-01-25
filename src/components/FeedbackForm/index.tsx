'use client';

import classNames from 'classnames';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/ui/Button';
import SvgIcon from '@/components/ui/SvgIcon';
import H5 from '@/components/ui/Typography/H5';

import s from './FeedbackForm.module.scss';

interface IFeedbackFormProps {
  setIsModal: (isModal: boolean) => void;
}

type Inputs = {
  name: string;
  email: string;
  phone: string;
  feedback: string;
  agreement: string;
};

const FeedbackForm: FC<IFeedbackFormProps> = ({ setIsModal }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data, errors);
    setIsModal(false);
  };

  return (
    <>
      <H5 className={s.feedback__title}>
        Leave your request, we will call you back
      </H5>

      <form className={s.feedback__form} onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <div className={s.feedback__wrap}>
          <input
            {...register('name', { required: true })}
            className={s.feedback__input}
            type="text"
            autoComplete="off"
          />
          <SvgIcon className={s.input__icon} id="form-name" />
        </div>

        <label>Phone</label>
        <div className={s.feedback__wrap}>
          <input
            {...register('phone', { required: true })}
            className={s.feedback__input}
            type="tel"
            autoComplete="off"
          />
          <SvgIcon className={s.input__icon} id="form-phone" />
        </div>

        <label>Email</label>
        <div className={s.feedback__wrap}>
          <input
            {...register('email', { required: true })}
            className={s.feedback__input}
            type="email"
            autoComplete="off"
          />
          <SvgIcon className={s.input__icon} id="form-mail" />
        </div>

        <label className={classNames(s.feedback__wrap, s.wrap__last)}>
          Feedback
          <textarea
            {...register('feedback', { required: true })}
            className={s.feedback__textarea}
            placeholder="Enter the text"
          />
        </label>

        <label className={s.feedback___checkbox}>
          <input
            {...register('agreement', { required: true })}
            className={classNames(s.feedback__input, 'hidden')}
            type="checkbox"
          />
          <span className={s.chechkbox__icon}>
            <SvgIcon id="ui-checkbox" width={12} height={12} />
          </span>
          I agree with the subscription and accept&nbsp;
          <a className={s.feedback__link} href="#">
            terms of the contract
          </a>
        </label>

        <Button
          className={s.send__btn}
          variant={watch('agreement') ? 'default' : 'disabled'}
          type="submit"
          size="m"
          label="Send"
        ></Button>
      </form>
    </>
  );
};

export default FeedbackForm;
