import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Title from '../components/title';
import Paragraph from '../components/paragraph';

import { home, contact } from '../content';

interface Props {}

const getLink = (type: string) => {
  const link = contact.contactLinks.find((c) => c.type === type);
  if (link) {
    return link.link;
  } else {
    return "";
  }
}

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
            <div className="contact-link-wrapper">
              <a href={getLink('github')} target="_blank" rel="noopener noreferrer"><i className='fa fa-github fa-2x contact-link'></i></a>
              <a href={getLink('linkedin')} target="_blank" rel="noopener noreferrer"><i className='fa fa-linkedin fa-2x contact-link'></i></a>
              <a href={getLink('cv')} target="_blank" rel="noopener noreferrer"><i className='fa fa-file-o fa-2x contact-link'></i></a>
              <a href={getLink('email')} target="_blank" rel="noopener noreferrer"><i className='fa fa-envelope-o fa-2x contact-link'></i></a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
