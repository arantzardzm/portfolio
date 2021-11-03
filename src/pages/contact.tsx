import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/title';
import Paragraph from '../components/paragraph';

import { contact } from '../content';
import { cv } from '../documents';

interface Props {}

const getLink = (type: string) => {
  const link = contact.contactLinks.find((c) => c.type === type);
  if (link) {
    return link.link;
  } else {
    return "";
  }
}

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
              color={'white'}
              p={true}
            />
            <div className="contact-link-wrapper">
              <a href={getLink('github')} target="_blank" rel="noopener noreferrer"><i className='fa fa-github fa-2x contact-link'></i></a>
              <a href={getLink('linkedin')} target="_blank" rel="noopener noreferrer"><i className='fa fa-linkedin fa-2x contact-link'></i></a>
              <a href={getLink('behance')} target="_blank" rel="noopener noreferrer"><i className='fa fa-behance fa-2x contact-link'></i></a>
              <a href={cv} target="_blank" rel="noopener noreferrer"><i className='fa fa-file-o fa-2x contact-link'></i></a>
              <a href={getLink('email')} target="_blank" rel="noopener noreferrer"><i className='fa fa-envelope-o fa-2x contact-link'></i></a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Contact;
