import React from 'react';
import { ParagraphProps } from '../interfaces';

const getMappedText = (text: string[], color: string) => text.map((t: string) => {
  if (t) {
    return (
      <p className={color ? `paragraph ${color}-text` : 'paragraph'}>{t}</p>
    );
  } else {
    return (
      <br></br>
    );
  }
});

const Paragraph = (props: ParagraphProps) => {
  const { text, color } = props;

  return (
    <>
      <div>
        {getMappedText(text, color)}
      </div>
    </>
  );
};

export default Paragraph;
