'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

import Section from '@/components/ui/Section';
import Typo from '@/components/ui/Typo';
import images from '@/utils/context/projectsContext';

import data from './projects.json';
import s from './Projects.module.scss';

const Projects = () => {
  const initialState = 'all';
  const [filter, setFilter] = useState(initialState);

  const set = new Set(data.map(el => el.type)).add(initialState);
  const projectGroups = Array.from(set).reverse();

  const projects = data.filter(el =>
    filter === initialState ? el : el.type === filter,
  );

  return (
    <Section className="container">
      <Typo className="hidden" el="h1">
        Portfolio
      </Typo>

      <div className={s.filter}>
        {projectGroups.map(el => (
          <button
            className={classNames(s.filter__btn, el === filter && s.active)}
            onClick={() => setFilter(el)}
            key={el}
          >
            {el}
          </button>
        ))}
      </div>

      <div className={s.projects}>
        {projects.map(el => {
          return (
            <div className={s.projects__wrap} key={el.href}>
              <div className={s.image__wrap}>
                <Image
                  src={images.find(img => img.name === el.name).file}
                  alt={el.name}
                />
                <p className={s.projects__description}>{el.value}</p>
              </div>
              <a
                className={s.projects__link}
                href={el.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typo el="h5" className={s.projects__title}>
                  {el.name.replaceAll('-', ' ')}
                </Typo>
                <Typo el="p" fontWeight={400} className={s.projects__type}>
                  {el.type}
                </Typo>
              </a>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
