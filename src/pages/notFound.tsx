import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from '../components/navigation';
import Title from '../components/title';
import Paragraph from '../components/paragraph';

import { notFound } from '../content';

interface Props { }

const NotFound = (props: Props) => {
  return (
    <>
      <div className="main-wrapper">
        <Navigation color={'white'} />
        <Row className="notFound-row-wrapper">
          <Col className="notFound-title-wrapper">
            <div>
              <Title
                text={notFound.mainTitle}
                textSize={'l'}
                textStyle={'normal'}
              />
              <Paragraph
                text={notFound.mainParagraph}
                color={'white'}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NotFound;
