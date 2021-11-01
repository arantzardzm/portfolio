import React from 'react';
import { ImageProps } from '../interfaces';

const getMappedImages = (images: string[], width: string, height: string) => images.map((image: string) => {
  return (
    <img width={width} height={height} style={{ padding:'2%' }} alt={image} src={image} />
  );
});

const Images = (props: ImageProps) => {
  const { images, width, height } = props;
  return (
    <>
      <div style={{textAlign:'center'}}>
      {getMappedImages(images, width, height)}
      </div>
    </>
  );
};

export default Images;
