import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/title';
import Paragraph from '../components/paragraph';

import { notFound } from '../content';

interface Props {}

const NotFound = (props: Props) => {
  return (
    <>
      <div className="main-wrapper">
        <Row className="notFound-row-wrapper">
          <Col className="notFound-title-wrapper">
            <div>
              <Title
                text={notFound.title}
                textSize={'l'}
                textStyle={'normal'}
              />
              <Paragraph
                text={notFound.paragraph}
                color={'white'}
                p={true}
              />
            </div>
          </Col>
          <Col className="notFound-description-wrapper">
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NotFound;
