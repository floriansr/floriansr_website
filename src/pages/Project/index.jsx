import React from 'react';
import { useParams } from 'react-router-dom';
import image1 from 'assets/images/img-55.jpg';
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

const Project = () => {
  const { projectId } = useParams();
  console.log(projectId);

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
                src={image1}
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
                  MixUp
                </Text>

                <ul className="vertical-info mt-4 mr-2">
                  <li>
                    <Row justify={{ xs: 'space-around', lg: 'space-between' }}>
                      <Icon
                        name="FolderSolid"
                        size="18px"
                        className="vi-title"
                      />
                      <p className="vi-content">MusicTech, Web Development</p>
                    </Row>
                  </li>

                  <li>
                    <Row justify={{ xs: 'space-around', lg: 'space-between' }}>
                      <Icon name="UserSolid" size="18px" className="vi-title" />
                      <p className="vi-content">
                        Florian, Julie, Yousri &amp; Raph
                      </p>
                    </Row>
                  </li>
                  <li>
                    <Row justify={{ xs: 'space-around', lg: 'space-between' }}>
                      <Icon name="Settings" size="18px" className="vi-title" />
                      <p className="vi-content">ReactJS, Redux, Rails 6</p>
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
                  <Anchor href="#" textColor="white">
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
                    MixUp is your democratic solution to have a music playlist
                    with which everybody is happy. The principal is simple: you
                    have a list of musical tracks, people vote over these
                    tracks, the one receiving most votes goes on top of the
                    queue, and gets played in the first place. Votes can happen
                    when a piece of music is played. When it is over, the one
                    having highest vote among the rest gets played next.
                  </Text>
                  <br />

                  <Text className="lead line-height-1_8" textAlign="justify">
                    Collecting information half from back, half from Spotify and
                    linking the information on the same piece of music. We had a
                    long discussion on the architecture. We may not be totally
                    happy with our initial choice, but we couldn't have foreseen
                    everything. Error handling with axios (that we discovered).
                    Retrieving the actual music, getting the end.
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
                    <Anchor href="#" className="link">
                      GitHub repositories
                    </Anchor>
                  </li>

                  <li>
                    <Anchor href="#" className="link">
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
                  src={image1}
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
                  src={image1}
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
                  src={image1}
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

export default Project;
