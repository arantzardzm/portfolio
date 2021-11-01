import React from 'react';
import { Link, LinkProps } from '../interfaces';

const getMappedText = (link: Link[]) => link.map((l: Link) => {
  return (
    <div>
      <a href={l.link} target="_blank" rel="noopener noreferrer" className={'paragraph black-text'}>{l.text}</a>
    </div>
  );
});

const Links = (props: LinkProps) => {
  const { links } = props;

  return (
    <>
      <div>
        {getMappedText(links)}
      </div>
    </>
  );
};

export default Links;
