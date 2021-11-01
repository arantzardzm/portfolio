import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/title';
import Paragraph from '../components/paragraph';

import { home } from '../content';

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <div className="main-wrapper">
        <Row className="home-row-wrapper">
          <Col className="home-title-wrapper">
            <div>
              <Title
                text={home.mainTitle}
                textSize={'l'}
                textStyle={'normal'}
              />
              <Paragraph
                text={home.mainParagraph}
                color={'black'}
              />
            </div>
          </Col>
          <Col className="home-description-wrapper">
            <div>
              <Title
                text={home.aboutTitle}
                textSize={'l'}
                textStyle={'normal'}
                link={home.aboutLink}
              />
              <Paragraph
                text={home.aboutParagraph}
                color={'white'}
              />
              <Title
                text={home.workTitle}
                textSize={'l'}
                textStyle={'normal'}
                link={home.workLink}
              />
              <Paragraph
                text={home.workParagraph}
                color={'white'}
              />
              <Title
                text={home.contactTitle}
                textSize={'l'}
                textStyle={'normal'}
                link={home.contactLink}
              />
              <Paragraph
                text={home.contactParagraph}
                color={'white'}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
