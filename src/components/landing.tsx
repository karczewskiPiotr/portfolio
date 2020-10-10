import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-spring/renderprops';
import '../styles/landing.css';

const Landing = () => {
  const { t } = useTranslation();
  const [variant, setVariant] = useState(1);

  const setDelayedVariant = (variant: number): void => {
    setTimeout(() => {
      setVariant(variant);
    }, 3000);
  };

  useEffect(() => {
    switch (variant) {
      case 1:
        setDelayedVariant(2);
        break;
      case 2:
        setDelayedVariant(3);
        break;
      case 3:
        setDelayedVariant(1);
        break;
    }
  }, [variant]);

  const getVariantText = (variant: number): string => {
    return t(`subtitle.part2.var${variant}`);
  };

  return (
    <section className='landing margin-top-xl'>
      <div className='margin-top-xl'>
        <h1 className='title'>
          {t('title.part1')} <span>{t('title.part2')}</span>
        </h1>
        <p className='subtitle'>
          {t('subtitle.part1')}
          {
            <Transition
              items={variant}
              config={{ friction: 16 }}
              from={{
                opacity: 0,
                transform: 'rotateX(180deg)',
                display: 'inline-block',
                width: 0,
              }}
              enter={{
                opacity: 1,
                transform: 'rotateX(0deg)',
                display: 'inline-block',
                width: 'auto',
              }}
              leave={{
                opacity: 0,
                transform: 'rotateX(180deg)',
                display: 'inline-block',
                width: 0,
              }}
            >
              {(variant) => (props) => (
                <span className='standout' style={props}>
                  {getVariantText(variant)}
                </span>
              )}
            </Transition>
          }
          {t('subtitle.part3')}
        </p>
        <div className='call-to-action margin-top-md'>
          <a
            className='email-btn margin-right-xs'
            href='mailto:p.karczewsk@gmail.com'
          >
            {t('contactBtn')}
          </a>
          <a className='work-btn margin-left-xs' href='#'>
            {t('seeWork')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
