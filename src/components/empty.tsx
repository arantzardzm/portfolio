import React from 'react';
import { EmptyProps } from '../interfaces';

const Empty = (props: EmptyProps) => {
 const { size } = props;
  return (
    <>
      <div className={`empty-${size || 'l'}`}></div>
    </>
  );
};

export default Empty;
