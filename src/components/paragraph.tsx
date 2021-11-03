import React from 'react';
import { ParagraphProps } from '../interfaces';

const getMappedSentence = (text: string[], color: string) => text.map((t: string) => {
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

const getMappedParagraph = (text: any, color: string) => text.map((t: string, i: number) => {
  return (
    <>
      {getMappedSentence(text[i].paragraph, color)}
      <br></br>
    </>
  );
});

const Paragraph = (props: ParagraphProps) => {
  const { text, color, p } = props;
  if (p) {
    return (
      <>
        <div>
          {getMappedParagraph(text, color)}
        </div>
      </>
    );
  }
  return (
    <>
      <div>
        {getMappedSentence(text, color)}
      </div>
    </>
  );
};

export default Paragraph;
