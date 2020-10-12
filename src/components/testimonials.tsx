import React, { useState, useEffect } from 'react';
import '../styles/testimonials.css';
import { TestimonialType } from '../constants/types';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';
import { useTranslation } from 'react-i18next';
import Quotation from '../images/quotations.svg';

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
        <p>{testimonial.content}</p>
        <div className='testimonial-author'>
          <div className='author-image'>
            <img
              src={testimonial.picture}
              alt={`${testimonial.author} picture`}
            />
          </div>
          <p className='author'>{testimonial.author}</p>
          <p className='job '>{testimonial.job}</p>
        </div>
      </div>
    );
  };

  return (
    <section className='testimonials-wrapper margin-horizontal-sm'>
      <h3 className='margin-bottom-lg'>{t('testimonials')}</h3>
      <div>{getTestimonialCard(focus)}</div>
    </section>
  );
};

export default Testimonials;
