import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/title';
import Paragraph from '../components/paragraph';

import { contact } from '../content';

interface Props {}

const Contact = (props: Props) => {
  return (
    <>
      <div className="main-wrapper">
        <Row className="contact-row-wrapper">
          <Col className="contact-title-wrapper">
            <div>
              <Title
                text={contact.contactTitle}
                textSize={'l'}
                textStyle={'normal'}
              />
            </div>
          </Col>
        </Row>
        <Row className="contact-row-wrapper">
          <Col className="contact-description-wrapper">
            <Paragraph
              text={contact.contactDescription}
              color={'white'}/>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
