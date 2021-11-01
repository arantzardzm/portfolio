import React from 'react';
import Title from './title';
import Paragraph from './paragraph';
import Empty from './empty';

const Main = (props: any) => {
  const { obj } = props;
  return (
    <>
      <Empty />
      <Title
        text={obj.title}
        textSize={'l'}
        textStyle={'normal'}
      />
      <Empty />
      <Paragraph
        text={obj.paragraph}
        color={'black'}
      />
      <Empty />
    </>
  );
};

export default Main;
