import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Transition } from 'react-spring/renderprops';
import '../styles/landing.css';

const Landing = () => {
  const { t } = useTranslation();
  const [variant, setVariant] = useState(1);

  useEffect(() => {
    if (variant === 1) {
      setTimeout(() => {
        setVariant(2);
      }, 3000);
    } else if (variant === 2) {
      setTimeout(() => {
        setVariant(3);
      }, 3000);
    } else if (variant === 3) {
      setTimeout(() => {
        setVariant(1);
      }, 3000);
    }
  }, [variant]);

  const pickVariant = (variant: number) => {
    switch (variant) {
      case 1:
        return t('subtitle.part2.var1');
      case 2:
        return t('subtitle.part2.var2');
      case 3:
        return t('subtitle.part2.var3');
      default:
        return '';
    }
  };

  return (
    <section className='landing margin-top-xl'>
      <h1>{t('title')}</h1>
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
            {(variant: number) => (props) => (
              <span className='standout' style={props}>
                {pickVariant(variant)}
              </span>
            )}
          </Transition>
        }
        {t('subtitle.part3')}
      </p>
    </section>
  );
};

export default Landing;
