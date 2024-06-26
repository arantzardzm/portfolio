import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from '../components/navigation';
import Title from '../components/title';
import Paragraph from '../components/paragraph';
import Empty from '../components/empty';

import { contact } from '../content';

interface Props { }

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
        <Navigation color={'white'} />
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

        <Empty />

        <Row className="contact-description-row-wrapper">
          <Col className="contact-description-wrapper">
            <Paragraph
              text={contact.contactDescription}
              color={'black'}
              p={true}
            />
            <div className="contact-link-wrapper">
              <a href={getLink('github')} target="_blank" rel="noopener noreferrer"><i className='fa fa-github fa-2x contact-link'></i></a>
              <a href={getLink('linkedin')} target="_blank" rel="noopener noreferrer"><i className='fa fa-linkedin fa-2x contact-link'></i></a>
              <a href={getLink('behance')} target="_blank" rel="noopener noreferrer"><i className='fa fa-behance fa-2x contact-link'></i></a>
              <a href={getLink('cv')} target="_blank" rel="noopener noreferrer"><i className='fa fa-file-o fa-2x contact-link'></i></a>
              <a href={getLink('email')} target="_blank" rel="noopener noreferrer"><i className='fa fa-envelope-o fa-2x contact-link'></i></a>
            </div>
          </Col>
          <Empty size="l" />
        </Row>
      </div>
    </>
  );
};

export default Contact;
