import React from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Div,
  Row,
  Col,
  Text,
  Image,
  Anchor,
  Icon,
  Button,
} from 'atomize';
import ProgressiveBar from 'components/ProgressiveBar';

const SinglePage = () => {
  const { project } = useSelector((state) => state.oneProject);

  return (
    <>
      <section
        style={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          backgroundColor: 'lightgrey',
        }}
      >
        <Container p={{ b: 'inherit' }}>
          <Row>
            <Div size="12">
              <Image
                src={project.imageUrl}
                h="50vh"
                className="object-fit"
                style={{
                  borderRadius: '0.25rem',
                }}
              />
            </Div>
          </Row>
        </Container>
      </section>

      <section
        style={{
          paddingTop: '2rem',
          paddingBottom: '2rem',
          backgroundColor: 'lightgrey',
          position: 'relative',
        }}
      >
        <Container p={{ b: 'inherit' }}>
          <Div
            className="cols-xs-space cols-sm-space cols-md-space"
            m={{ b: '5rem' }}
          >
            <Row>
              <Div m={{ t: '-9.375rem' }} className="sct-color-2 col-lg-3 ">
                <Text
                  tag="h1"
                  m={{ t: '1.5rem' }}
                  className="heading heading-1 strong-700 text-capitalize ls-2"
                >
                  {project.title}
                </Text>

                <ul className="vertical-info mt-4 mr-2">
                  <li>
                    <Row justify={{ xs: 'space-around', lg: 'space-between' }}>
                      <Icon
                        name="FolderSolid"
                        size="18px"
                        className="vi-title"
                      />
                      <p className="vi-content">{project.themes}</p>
                    </Row>
                  </li>

                  <li>
                    <Row justify={{ xs: 'space-around', lg: 'space-between' }}>
                      <Icon name="UserSolid" size="18px" className="vi-title" />
                      <p className="vi-content">{project.team}</p>
                    </Row>
                  </li>
                  <li>
                    <Row justify={{ xs: 'space-around', lg: 'space-between' }}>
                      <Icon name="Settings" size="18px" className="vi-title" />
                      <p className="vi-content">{project.tools}</p>
                    </Row>
                  </li>
                </ul>

                <Button
                  prefix={
                    <Icon
                      name="EyeSolid"
                      size="16px"
                      color="white"
                      m={{ r: '0.5rem' }}
                    />
                  }
                  bg="success700"
                  hoverBg="success800"
                  rounded="circle"
                  p={{ r: '1.5rem', l: '1rem' }}
                  shadow="3"
                  hoverShadow="4"
                  left="55%"
                  top="10%"
                >
                  <Anchor href={project.link} textColor="white" target="_blank">
                    Preview
                  </Anchor>
                </Button>
              </Div>

              <Col size="6">
                <Container p={{ l: '3rem', r: '3rem' }}>
                  <Text tag="h3" className="heading heading-3 mb-4">
                    The challenge
                  </Text>

                  <Text className="lead line-height-1_8" textAlign="justify">
                    {project.description}
                  </Text>
                  <br />

                  <Text className="lead line-height-1_8" textAlign="justify">
                    {project.details}
                  </Text>
                </Container>
              </Col>

              <Col size="3">
                <Text
                  tag="h3"
                  className="heading heading-sm strong-300 text-uppercase"
                >
                  Ressources
                </Text>

                <ul className="vertical-info mt-4">
                  <li>
                    <Anchor
                      href={project.github_link}
                      className="link"
                      target="_blank"
                    >
                      GitHub repositories
                    </Anchor>
                  </li>

                  <li>
                    <Anchor
                      href={project.discovery_links}
                      className="link"
                      target="_blank"
                    >
                      Discovery &amp; Inspirations
                    </Anchor>
                  </li>
                </ul>
              </Col>
            </Row>
          </Div>
        </Container>
      </section>
      <section
        className="slice sct-color-2 border-top"
        style={{ paddingTop: '0', paddingBottom: '10rem' }}
      >
        <Container>
          <Row>
            <Div className="col-lg-6">
              <Text
                tag="h2"
                className="heading heading-1 strong-400 font-custom-4"
              >
                An excellent choice
              </Text>
              <Text
                tag="h3"
                m={{ t: '1.5rem' }}
                className="heading heading-3 strong-400 c-gray-light font-custom-4 "
              >
                We build it. You rock it!
              </Text>

              <Text
                className="c-gray-light mt-4"
                m={{ b: '1.5rem' }}
                style={{ textAlign: 'justify' }}
              >
                The past and the future become unimportant. There is only that
                moment, and the incredible certainty that everything under the
                sun has been written by one hand only. It is the hand that
                evokes love, and creates a twin soul for every person in the
                world. Without such love, one’s dreams would have no meaning.
              </Text>
            </Div>
          </Row>

          <Div className="animate-on-scroll fadeInUp">
            <Row>
              <Div className="col-lg-10 ml-lg-auto view view-first">
                <Image
                  src={project.imageUrl1}
                  className="object-fit"
                  style={{ borderRadius: '0.25rem', height: '300px' }}
                />
              </Div>
            </Row>
          </Div>

          <Div m={{ t: '-4rem' }} className="row animate-on-scroll fadeInUp">
            <Row>
              <Div className="col-lg-10 view view-first">
                <Image
                  src={project.imageUrl2}
                  className="object-fit"
                  style={{ borderRadius: '0.25rem', height: '300px' }}
                />
              </Div>
            </Row>
          </Div>

          <Div
            m={{ t: '-4rem' }}
            className="justify-content-center animate-on-scroll fadeInUp"
          >
            <Row>
              <Col size={{ lg: '10' }} className="ml-lg-auto view view-first">
                <Image
                  src={project.imageUrl3}
                  className="object-fit"
                  style={{ borderRadius: '0.25rem', height: '300px' }}
                />
              </Col>
            </Row>
          </Div>
        </Container>

        <ProgressiveBar />
      </section>
    </>
  );
};

export default SinglePage;
