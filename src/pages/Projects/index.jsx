import React, { useEffect } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';

import APIManager from 'services/APIManager';
import { Div, Col, Row, Image, Text, Container } from 'atomize';

import image1 from 'assets/images/img-55.jpg';
import image2 from 'assets/images/img-5.jpg';
import image3 from 'assets/images/img-42.jpg';
import image4 from 'src/assets/images/img-12.jpg';
import image5 from 'assets/images/liliana.jpg';

import ProgressiveBar from 'components/ProgressiveBar';
import { cookieName } from '../../constants';
import { setProjects } from '../../redux';

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await APIManager.showProjects();
        Cookies.set(
          cookieName,
          {
            projectsInfo: res,
          },
          { expires: 6 }
        );
        dispatch(setProjects(res));
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, [dispatch]);

  return (
    <>
      <section
        className="slice sct-color-1"
        style={{ backgroundColor: 'lightgrey' }}
      >
        <Container p={{ b: 'inherit' }}>
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
                  <Div
                    className="block block-image-holder"
                    m={{ t: { xs: '3rem', md: '3rem', lg: '0' } }}
                  >
                    <Div className="block-image">
                      <Div className="view view-first">
                        <Link to="/project/mixup">
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
                            to="/project/mixup"
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
              {/* 2 */}
              <Div className="col-lg-6 ml-lg-auto order-lg-2">
                <Div className="col-wrapper--spaced-x">
                  <Div
                    className="block block-image-holder"
                    m={{ t: { xs: '3rem', md: '3rem', lg: '0' } }}
                  >
                    <Div className="block-image">
                      <Div className="view view-first">
                        <Link to="/project/formyou">
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
                            to="/project/formyou"
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

              <Div
                className="col-lg-6 order-lg-1 animate-on-scroll fadeInUp"
                m={{ t: { xs: '0', md: '0', lg: '8rem' } }}
              >
                <Div className="col-wrapper--spaced-x">
                  <Div
                    className="block block-image-holder"
                    m={{ t: { xs: '3rem', md: '3rem', lg: '0' } }}
                  >
                    <Div className="block-image">
                      <Div className="view view-first">
                        <Link to="/project/simili-eventbrite">
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
                            to="/project/simili-eventbrite"
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
          <Div className="cols-xs-space cols-sm-space">
            <Row>
              <Div className="col-lg-6 ml-lg-auto order-lg-2 animate-on-scroll fadeInUp">
                <Div className="col-wrapper--spaced-x">
                  <Div
                    className="block block-image-holder"
                    m={{ t: { xs: '3rem', md: '3rem', lg: '0' } }}
                  >
                    <Div className="block-image">
                      <Div className="view view-first">
                        <Link to="/project/tisorbet">
                          <Image
                            src={image4}
                            alt=""
                            height={300}
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
                            to="/project/tisorbet"
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

              <Div
                className="col-lg-6 order-lg-1 animate-on-scroll fadeInUp"
                m={{ t: { xs: '0', md: '0', lg: '8rem' } }}
                p={{ b: { xs: '5rem', md: '4.5rem', lg: '0' } }}
              >
                <Div className="col-wrapper--spaced-x">
                  <Div
                    className="block block-image-holder mb-5"
                    m={{ t: { xs: '3rem', md: '3rem', lg: '0' } }}
                  >
                    <Div className="block-image">
                      <Div className="view view-first">
                        <Link to="project/warz">
                          <Image
                            src={image5}
                            alt=""
                            height={300}
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
                            <span className="heading-count">05</span>
                            WARZ
                          </Text>
                        </Col>
                        <Col size="4" textAlign="right">
                          <Link
                            to="/project/warz"
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
        </Container>
        <ProgressiveBar />
      </section>
    </>
  );
};

export default Projects;
