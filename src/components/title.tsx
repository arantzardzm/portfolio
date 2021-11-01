import React from 'react';
import { TitleProps } from '../interfaces';

const Title = (props: TitleProps) => {
  const { text, textSize, textStyle, link, click } = props;

  let title = (
    <h1 className={`title title-${textSize} title-${textStyle}`}>{text}</h1>
  );

  if (link) {
    title = (
      <h1 className={`title title-${textSize} title-${textStyle}`}>
        <a className="title-link" href={link} onClick={click ? () => click(link) : () => {}}>{text}</a>
      </h1>
    );
  }

  return (
    <>
      <div>
        {title}
      </div>
    </>
  );
};

export default Title;
