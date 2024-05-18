import React from 'react';
import Title from './title';
import Paragraph from './paragraph';
import Images from './images';
import Spacer from '../components/spacer';
import Empty from './empty';
import Links from './links';
import Iframes from './iframes';

import {
  oxbowImgs,
  onehopeImgs,
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
  robotsImgs,
  colorsImgs
} from '../images';
import { robots } from '../files';

const Details = (props: any) => {
  const { obj } = props;

  let imgs: string[] | '';
  let imgWidth: string;
  let imgHeight: string;

  if (obj.link === '#oxbow') {
    imgs = oxbowImgs;
    imgWidth = '50%';
    imgHeight = '';
  } else if (obj.link === '#onehope') {
    imgs = onehopeImgs;
    imgWidth = '50%';
    imgHeight = '50%';
  } else if (obj.link === '#grabbd') {
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
      <Empty size={'l'} />
      <Title
        text={obj.title}
        textSize={'l'}
        textStyle={'normal'}
      />
      <Empty size={'l'} />

      {obj.type
        ?
        <>
          <Paragraph text={['Type']} color={'black'} />
          <Spacer />
          <Paragraph text={obj.type} color={'black'} p={true} />
          <Empty size={'s'} />
        </>
        : ''
      }

      {obj.about
        ?
        <>
          <Paragraph text={['About']} color={'black'} />
          <Spacer />
          <Paragraph text={obj.about} color={'black'} p={true} />
          <Empty size={'s'} />
        </>
        : ''
      }

      {obj.role && obj.link !== '#emerge'
        ?
        <>
          <Paragraph text={['Role']} color={'black'} />
          <Spacer />
          <Paragraph text={obj.role} color={'black'} p={true} />
          <Empty size={'s'} />
        </>
        : ''
      }

      {obj.role && obj.link === '#emerge'
        ?
        <>
          <Paragraph text={['Role']} color={'black'} />
          <Spacer />
          <Paragraph text={obj.role} color={'black'} />
          <Links links={obj.links} />
          <Empty size={'s'} />
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
          <Empty size={'s'} />
        </>
        : ''
      }

      {obj.link === '#robots'
        ?
        <>
          <Paragraph text={['Audio']} color={'black'} />
          <Spacer />
          <div style={{ textAlign: 'center' }}>
            <audio controls>
              <source src={robots} type="audio/mp3"></source>
            </audio>
          </div>
          <Empty size={'s'} />
        </>
        : ''
      }

      {obj.iframes
        ?
        <>
          <Paragraph text={['Videos']} color={'black'} />
          <Spacer />
          <Iframes iframes={obj.iframes} />
          <Empty size={'l'} />
        </>
        : ''
      }

      {obj.technologies
        ?
        <>
          <Paragraph text={['Technologies']} color={'black'} />
          <Spacer />
          <Paragraph text={obj.technologies} color={'black'} p={true} />
          <Empty size={'s'} />
        </>
        : ''
      }

      {obj.links && obj.link !== '#emerge'
        ?
        <>
          <Paragraph text={['Links']} color={'black'} />
          <Spacer />
          <Links links={obj.links} />
          <Empty size={'l'} />
        </>
        : ''
      }

    </>
  );
};

export default Details;
