import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from '../components/navigation';
import Title from '../components/title';
import Paragraph from '../components/paragraph';
import Empty from '../components/empty';

import { about } from '../content';

interface Props { }

const About = (props: Props) => {
  return (
    <>
      <div className="main-wrapper">
        <Navigation color={'white'} />
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

        <Empty />

        <Row className="about-description-row-wrapper">
          <Col className="about-description-wrapper">
            <Paragraph
              text={about.aboutDescription}
              color={'black'}
              p={true}
            />
          </Col>
        </Row>

        <Empty size="s" />

        <Row className="about-description-row-wrapper">
          <Title
            text={about.professionalTitle}
            textSize={'m'}
            textStyle={'normal'}
          />
          <Empty size="s" />
          <Col className="about-description-wrapper">
            <Paragraph
              text={about.professionalDescription}
              color={'black'}
              p={true}
            />
          </Col>
        </Row>

        <Empty size="s" />

        <Row className="about-description-row-wrapper">
          <Title
            text={about.freelanceTitle}
            textSize={'m'}
            textStyle={'normal'}
          />
          <Empty size="s" />
          <Col className="about-description-wrapper">
            <Paragraph
              text={about.freelanceDescription}
              color={'black'}
              p={true}
            />
          </Col>
        </Row>

        <Empty size="s" />

        <Row className="about-description-row-wrapper">
          <Title
            text={about.moreTitle}
            textSize={'m'}
            textStyle={'normal'}
          />
          <Empty size="s" />
          <Col className="about-description-wrapper">
            <Paragraph
              text={about.moreDescription}
              color={'black'}
              p={true}
            />
          </Col>
          <Empty size="l" />
        </Row>

      </div>
    </>
  );
};

export default About;
