import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Navigation from '../components/navigation';
import Title from '../components/title';
import Paragraph from '../components/paragraph';
import Spacer from '../components/spacer';
import Empty from '../components/empty';

import Main from '../components/main';
import Details from '../components/details';

import { works } from '../content';

interface Props {}
type Projects = 'main' | 'grabbd' | 'tamm' | 'gitex' | 'emerge' | 'maze';

const displayWork = (key: string) => {
  if (key === '#main') {
    return <Main obj={works.main} />
  } else {
    const k: string = key.replace('#', '');
    const objKey: Projects = k as Projects;
    return <Details obj={works[objKey]} />
  }
}

const Works = (props: Props) => {
  const [work, setWork] = useState(works.main.link);

  const selectWork = (work: string) => {
    setWork(work);
  };

  return (
    <>
      <div className="main-wrapper">
        <Navigation color={'white'}/>
        <Row className="works-row-wrapper">
          <Col lg={3} className="works-title-wrapper">
            <Empty />
            <Title
              text={works.main.title}
              textSize={'m'}
              textStyle={'italic'}
              link={works.main.link}
              click={selectWork}
            />
            <Empty />

            <Paragraph text={['2021']} color={'white'} />
            <Spacer />
            <Title
              text={works.grabbd.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.grabbd.link}
              click={selectWork}
              />
            <Empty />

            <Paragraph text={['2020']} color={'white'} />
            <Spacer />
            <Title
              text={works.tamm.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.tamm.link}
              click={selectWork}
              />
            <Empty />

            <Paragraph text={['2019']} color={'white'} />
            <Spacer />
            <Title
              text={works.gitex.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.gitex.link}
              click={selectWork}
              />
            <Title
              text={works.emerge.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.emerge.link}
              click={selectWork}
              />
            <Empty />

            <Paragraph text={['2018']} color={'white'} />
            <Spacer />
            <Title
              text={works.maze.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.maze.link}
              click={selectWork}
              />
            <Title
              text={works.karkhana.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.karkhana.link}
              click={selectWork}
              />
            <Title
              text={works.stranded.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.stranded.link}
              click={selectWork}
              />
            <Title
              text={works.square.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.square.link}
              click={selectWork}
              />
            <Title
              text={works.workshop.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.workshop.link}
              click={selectWork}
              />
            <Empty />

            <Paragraph text={['2017']} color={'white'} />
            <Spacer />
            <Title
              text={works.modeling.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.modeling.link}
              click={selectWork}
              />
            <Title
              text={works.robots.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.robots.link}
              click={selectWork}
              />
            <Title
              text={works.sphere.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.sphere.link}
              click={selectWork}
              />
            <Title
              text={works.colors.title}
              textSize={'s'}
              textStyle={'italic'}
              link={works.colors.link}
              click={selectWork}
              />
            <Empty />

          </Col>
          <Col lg={9} className="works-description-wrapper">
            {displayWork(work)}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Works;
