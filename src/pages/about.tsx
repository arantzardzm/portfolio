import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/title';
import Paragraph from '../components/paragraph';

import { about } from '../content';

interface Props {}

const About = (props: Props) => {
  return (
    <>
      <div className="main-wrapper">
        <Row className="about-row-wrapper">
          <Col className="about-title-wrapper">
            <div>
              <Title
                text={about.aboutTitle}
                textSize={'l'}
                textStyle={'normal'}
              />
            </div>
          </Col>
        </Row>
        <Row className="about-row-wrapper">
          <Col className="about-description-wrapper">
            <Paragraph
              text={about.aboutDescription}
              color={'black'}/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default About;
