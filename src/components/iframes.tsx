import React from 'react';
import { Iframe, IframeProps } from '../interfaces';

const getMappedIframe = (iframe: Iframe[]) => iframe.map((i: Iframe) => {
  console.log(i)
  return (
    <div className="embed-container">
      <div dangerouslySetInnerHTML={{ __html: `<iframe src=${i.link} width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`}} />
    </div>
  );
});

const Iframes = (props: IframeProps) => {
  const { iframes } = props;

  return (
    <>
      <div>
        {getMappedIframe(iframes)}
      </div>
    </>
  );
};

export default Iframes;
