import React from 'react';
import '../styles/loading.css';
import { animated, useSpring } from 'react-spring';
import Logo from '../images/logo.svg';

const Loading: React.FC = () => {
  const props = useSpring({
    from: { opacity: 0.5, transform: 'scale(0) rotate(135deg)' },
    to: async (next: any) => {
      while (true) {
        await next({ opacity: 1, transform: 'scale(1) rotate(0deg)' });
        await next({ opacity: 1, transform: 'scale(0.8) rotate(0deg)' });
        await next({ opacity: 1, transform: 'scale(1) rotate(0deg)' });
      }
    },
  });

  return (
    <div className='loading'>
      <animated.img style={props} src={Logo} alt='Logo' />
    </div>
  );
};

export default Loading;
