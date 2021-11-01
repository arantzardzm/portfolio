import React from 'react';
import Title from './title';
import Paragraph from './paragraph';
import Images from './images';
import Spacer from '../components/spacer';
import Empty from './empty';
import Links from './links';
import Iframes from './iframes';

import {
  grabbdImgs,
  tammImgs,
  gitexImgs,
  emergeImgs,
  emerge2Imgs,
  mazeImgs,
  karkhanaImgs,
  karkhana2Imgs,
  strandedImgs,
  squareImgs,
  workshopImgs,
  modelingImgs,
  robotsImgs,
  colorsImgs
} from '../images';
import { robots } from '../documents';

const Details = (props: any) => {
  const { obj } = props;

  let imgs: string[] | '';
  let imgWidth: string;
  let imgHeight: string;

  if (obj.link === '#grabbd') {
    imgs = grabbdImgs;
    imgWidth = '25%';
    imgHeight = '25%';
  } else if (obj.link === '#tamm') {
    imgs = tammImgs;
    imgWidth = '50%';
    imgHeight = '';
  } else if (obj.link === '#gitex') {
    imgs = gitexImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#emerge') {
    imgs = emergeImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#maze') {
    imgs = mazeImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#karkhana') {
    imgs = karkhanaImgs;
    imgWidth = '80%';
    imgHeight = '80%';
  } else if (obj.link === '#stranded') {
    imgs = strandedImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#square') {
    imgs = squareImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#workshop') {
    imgs = workshopImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#modeling') {
    imgs = modelingImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#robots') {
    imgs = robotsImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#colors') {
    imgs = colorsImgs;
    imgWidth = '65%';
    imgHeight = '65%';
  } else {
    imgs = '';
    imgWidth = '';
    imgHeight = '';
  }

  return (
    <>
      <Empty />
      <Title
        text={obj.title}
        textSize={'l'}
        textStyle={'normal'}
      />
      <Empty />

      {obj.type
        ?
          <>
            <Paragraph text={['Type']} color={'black'} />
            <Spacer />
            <Paragraph text={obj.type} color={'black'} />
            <Empty />
          </>
        : ''
      }

      {obj.about
        ?
          <>
            <Paragraph text={['About']} color={'black'} />
            <Spacer />
            <Paragraph text={obj.about} color={'black'} />
            <Empty />
          </>
        : ''
      }

      {obj.role
        ?
          <>
            <Paragraph text={['Development']} color={'black'} />
            <Spacer />
            <Paragraph text={obj.role} color={'black'} />
            <Empty />
          </>
        : ''
      }

      {imgs
        ?
          <>
            <Paragraph text={['Images']} color={'black'} />
            <Spacer />
            <Images images={imgs} width={imgWidth} height={imgHeight} />
            {obj.link === '#karkhana'
              ? <Images images={karkhana2Imgs} width={'30%'} height={'30%'} />
              : ''
            }
            {obj.link === '#emerge'
              ? <Images images={emerge2Imgs} width={'25%'} height={'25%'} />
              : ''
            }
            <Empty />
          </>
        : ''
      }

      {obj.link === '#robots'
        ?
          <>
            <Paragraph text={['Audio']} color={'black'} />
            <Spacer />
            <div style={{textAlign:'center'}}>
              <audio controls>
                <source src={robots} type="audio/ogg"></source>
              </audio>
            </div>
            <Empty />
          </>
        : ''
      }

      {obj.iframes
        ?
          <>
            <Paragraph text={['Videos']} color={'black'} />
            <Spacer />
            <Iframes iframes={obj.iframes} />
            <Empty />
          </>
        : ''
      }

      {obj.technologies
        ?
          <>
            <Paragraph text={['Technologies']} color={'black'} />
            <Spacer />
            <Paragraph text={obj.technologies} color={'black'} />
            <Empty />
          </>
        : ''
      }

      {obj.links
        ?
          <>
            <Paragraph text={['Links']} color={'black'} />
            <Spacer />
            <Links links={obj.links} />
            <Empty />
          </>
        : ''
      }

    </>
  );
};

export default Details;
