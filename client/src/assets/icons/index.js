import React from 'react';

import Positive from './src/Positive';
import Negative from './src/Negative';


const Icon = props => {
  switch (props.name) {
    case 'Positive':
      return <Positive {...props} />;
    case 'Negative':
      return <Negative {...props} />;
    default:
      return;
  }
};

export default Icon;