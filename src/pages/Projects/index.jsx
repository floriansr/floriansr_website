import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { Div, Col, Row, Image, Text, Container } from 'atomize';

import image1 from 'assets/images/img-55.jpg';
import image2 from 'assets/images/img-5.jpg';
import image3 from 'assets/images/img-42.jpg';
import image4 from 'assets/images/img-12.jpg';
import image5 from 'assets/images/liliana.jpg';

import ProgressiveBar from 'components/ProgressiveBar';

const Projects = () => {
  return (
    <>
      <section
        className="slice sct-color-1"
        style={{ backgroundColor: 'lightgrey' }}
      >
        <Container style={{ paddingBottom: 'inherit' }}>
          <Div className="cols-xs-space cols-sm-space">
            <Row>
              <Div className="col-lg-6 ml-lg-auto order-lg-2 align-self-lg-center">
                <Div className="col-wrapper--spaced-x">
                  <Text
                    m={{ t: '1.5rem' }}
                    tag="h3"
                    className="heading heading-xl text-uppercase strong-600 ls-2"
                  >
                    Projects
                  </Text>

                  <Text m={{ t: '1.5rem' }}>
                    There is only one way to learn.
                    <br />
                    Everything you need to know about what I learned through my
                    journey.
                  </Text>
                </Div>
              </Div>

              <Div className="col-lg-6 order-lg-1">
                <Div className="col-wrapper--spaced-x">
                  <Div className="block block-image-holder">
                    <Div className="block-image">
                      <Div className="view view-first">
                        <Link to="/project/1">
                          <Image
                            src={image1}
                            alt=""
                            height={300}
                            className="object-fit"
                          />
                        </Link>
                      </Div>
                    </Div>
                    <Div align="center" p={{ t: '1.5rem' }}>
                      <Row>
                        <Col size="8">
                          <Text
                            tag="h3"
                            className="heading heading-3 strong-600 text-normal mb-0"
                          >
                            <span className="heading-count">01</span>
                            MixUp
                          </Text>
                        </Col>
                        <Col size="4" textAlign="right">
                          <Link
                            to="/project/1"
                            className="link link-xs link--line-after strong-600
                          text-uppercase ls-2"
                          >
                            {' '}
                            View case
                          </Link>
                        </Col>
                      </Row>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Row>
          </Div>

          <span className="space-xs-only-3 space-sm-only-3" />
          {/* 02/03 */}

          <Div className="cols-xs-space cols-sm-space">
            <Row>
              <Div className="col-lg-6 ml-lg-auto order-lg-2">
                <Div className="col-wrapper--spaced-x">
                  <Div className="block block-image-holder">
                    <Div className="block-image">
                      <Div className="view view-first">
                        <Link to="/project/2">
                          <Image
                            src={image2}
                            alt=""
                            width={800}
                            height={300}
                            className="object-fit"
                          />
                        </Link>
                      </Div>
                    </Div>
                    <Div align="center" p={{ t: '1.5rem' }}>
                      <Row>
                        <Col size="8">
                          <Text
                            tag="h3"
                            className="heading heading-3 strong-600 text-normal mb-0"
                          >
                            <span className="heading-count">02</span>
                            FormYou
                          </Text>
                        </Col>
                        <Col textAlign="right" size="4">
                          <Link
                            to="/project/2"
                            className="link link-xs link--line-after strong-600 text-uppercase ls-2"
                          >
                            View case
                          </Link>
                        </Col>
                      </Row>
                    </Div>
                  </Div>
                </Div>
              </Div>

              <Div className="col-lg-6 order-lg-1 mt-150 animate-on-scroll fadeInUp">
                <Div className="col-wrapper--spaced-x">
                  <Div className="block block-image-holder">
                    <Div className="block-image">
                      <Div className="view view-first">
                        <Link to="/project/3">
                          <Image
                            src={image3}
                            alt=""
                            height={300}
                            className="object-fit"
                          />
                        </Link>
                      </Div>
                    </Div>
                    <Div align="center" p={{ t: '1.5rem' }}>
                      <Row>
                        <Col size="8">
                          <Text
                            tag="h3"
                            className="heading heading-3 strong-600 text-normal mb-0"
                          >
                            <span className="heading-count">03</span>
                            Simili-Eventbrite
                          </Text>
                        </Col>
                        <Col textAlign="right" size="4">
                          <Link
                            to="/project/3"
                            className="link link-xs link--line-after strong-600 text-uppercase ls-2"
                          >
                            View case
                          </Link>
                        </Col>
                      </Row>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Row>
          </Div>

          <span className="space-xs-only-3 space-sm-only-3" />

          {/* 04/05 */}

          <Div className="row cols-xs-space cols-sm-space">
            <Div className="col-lg-6 ml-lg-auto order-lg-2 animate-on-scroll fadeInUp">
              <Div className="col-wrapper--spaced-x">
                <Div className="block block-image-holder">
                  <Div className="block-image">
                    <Div className="view view-first">
                      <Link to="/project/4">
                        <Image
                          src={image4}
                          maxH={{ xs: 'auto', md: '50vh' }}
                          w={{ xs: 'auto', md: '50vw' }}
                          className="object-fit object-fit-top"
                        />
                      </Link>
                    </Div>
                  </Div>
                  <Div align="center" p={{ t: '1.5rem' }}>
                    <Row>
                      <Col size="8">
                        <Text
                          tag="h3"
                          className="heading heading-3 strong-600 text-normal mb-0"
                        >
                          <span className="heading-count">04</span>
                          Ti Sorbet
                        </Text>
                      </Col>
                      <Col size="4" textAlign="right">
                        <Link
                          to="/project/4"
                          className="link link-xs link--line-after strong-600 text-uppercase ls-2"
                        >
                          View case
                        </Link>
                      </Col>
                    </Row>
                  </Div>
                </Div>
              </Div>
            </Div>

            <Div className="col-lg-6 order-lg-1 mt-150 animate-on-scroll fadeInUp">
              <Div className="col-wrapper--spaced-x">
                <Div className="block block-image-holder mb-5">
                  <Div className="block-image">
                    <Div className="view view-first">
                      <Link to="project/5">
                        <Image
                          src={image5}
                          maxH={{ xs: 'auto', md: '50vh' }}
                          w={{ xs: 'auto', md: '50vw' }}
                          className="object-fit object-fit-top"
                        />

                        {/* <img
                          src={image5}
                          alt=""
                          width={800}
                          height={300}
                          className="object-fit object-fit-top"
                        /> */}
                      </Link>
                    </Div>
                  </Div>
                  <Div align="center" p={{ t: '1.5rem' }}>
                    <Row>
                      <Col size="8">
                        <Text
                          tag="h3"
                          className="heading heading-3 strong-600 text-normal mb-0"
                        >
                          <span className="heading-count">05</span>
                          WARZ
                        </Text>
                      </Col>
                      <Col size="4" textAlign="right">
                        <Link
                          to="/project/5"
                          className="link link-xs link--line-after strong-600 text-uppercase ls-2"
                        >
                          View case
                        </Link>
                      </Col>
                    </Row>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Container>
        <ProgressiveBar />
      </section>
    </>
  );
};

export default Projects;
