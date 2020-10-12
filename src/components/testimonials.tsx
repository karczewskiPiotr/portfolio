import React, { useState } from 'react';
import '../styles/testimonials.css';
import { TestimonialType } from '../constants/types';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useTranslation } from 'react-i18next';
import Quotation from '../images/quotations.svg';
import ArrowLeft from '../images/arrow-left.svg';
import ArrowRight from '../images/arrow-right.svg';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [focus, setFocus] = useState(0);

  const testimonialsRef = useFirestore().collection('locales/en/testimonials');
  const testimonialsData = useFirestoreCollectionData(testimonialsRef);

  const getTestimonialCard = (index: number): JSX.Element => {
    const testimonial = testimonialsData[index] as TestimonialType;

    return (
      <div className='testimonial-card'>
        <img className='quotation-image' src={Quotation} alt='Quotation mark' />
        <p className='testimonial-content'>{testimonial.content}</p>
        <div className='testimonial-author'>
          <div className='author-image'>
            <img
              src={testimonial.picture}
              alt={`${testimonial.author}`}
            />
          </div>
          <div className='margin-right-xs'>
            <p className='author'>{testimonial.author}</p>
            <p className='job '>{testimonial.job}</p>
          </div>
        </div>
      </div>
    );
  };

  const focusOnNext = (): void => {
    setFocus((prev) => {
      if (prev < testimonialsData.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
  };

  const focusOnPrevious = (): void => {
    setFocus((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return testimonialsData.length - 1;
      }
    });
  };

  return (
    <section className='testimonials-wrapper margin-horizontal-sm'>
      <h3 className='margin-bottom-lg'>{t('testimonials')}</h3>
      <div className='carousel'>
        {getTestimonialCard(focus)}
        <img
          className='arrow-left'
          onClick={focusOnPrevious}
          src={ArrowLeft}
          alt='Arrow left'
        />
        <img
          className='arrow-right'
          onClick={focusOnNext}
          src={ArrowRight}
          alt='Arrow right'
        />
      </div>
    </section>
  );
};

export default Testimonials;
