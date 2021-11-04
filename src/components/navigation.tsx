import React from 'react';
import { NavigationProps } from '../interfaces';

const Navigation = (props: NavigationProps) => {
  const { color } = props;

  return (
    <>
      <div style={{position: 'absolute'}}>
        <a href="/"><i className={`fa fa-home fa-2x navigation-link ${color}-text`}></i></a>
      </div>
    </>
  );
};

export default Navigation;
