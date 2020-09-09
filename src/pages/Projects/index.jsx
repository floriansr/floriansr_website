import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
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
        <div className="container" style={{ paddingBottom: 'inherit' }}>
          <div className="row cols-xs-space cols-sm-space">
            <div className="col-lg-6 ml-lg-auto order-lg-2 align-self-lg-center">
              <div className="col-wrapper--spaced-x">
                <h3 className="heading heading-xl text-uppercase strong-600 ls-2 mt-4">
                  Projects
                </h3>

                <p className="mt-4">
                  There is only one way to learn.
                  <br />
                  Everything you need to know about what I learned through my
                  journey.
                </p>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1">
              <div className="col-wrapper--spaced-x">
                <div className="block block-image-holder">
                  <div className="block-image">
                    <div className="view view-first">
                      <Link to="/project/1">
                        <img
                          src={image1}
                          alt=""
                          height={300}
                          className="object-fit"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="heading heading-3 strong-600 text-normal mb-0">
                          <span className="heading-count">01</span>
                          MixUp
                        </h3>
                      </div>
                      <div className="col-4 text-right">
                        <Link
                          to="/project/1"
                          className="link link-xs link--line-after strong-600
                          text-uppercase ls-2"
                        >
                          {' '}
                          View case
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="space-xs-only-3 space-sm-only-3" />

          <div className="row cols-xs-space cols-sm-space">
            <div className="col-lg-6 ml-lg-auto order-lg-2">
              <div className="col-wrapper--spaced-x">
                <div className="block block-image-holder">
                  <div className="block-image">
                    <div className="view view-first">
                      <Link to="/project/2">
                        <img
                          src={image2}
                          alt=""
                          width={800}
                          height={300}
                          className="object-fit"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="heading heading-3 strong-600 text-normal mb-0">
                          <span className="heading-count">02</span>
                          FormYou
                        </h3>
                      </div>
                      <div className="col-4 text-right">
                        <Link
                          to="/project/2"
                          className="link link-xs link--line-after strong-600 text-uppercase ls-2"
                        >
                          View case
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1 mt-150 animate-on-scroll fadeInUp">
              <div className="col-wrapper--spaced-x">
                <div className="block block-image-holder">
                  <div className="block-image">
                    <div className="view view-first">
                      <Link to="/project/3">
                        <img
                          src={image3}
                          alt=""
                          height={300}
                          className="object-fit"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="heading heading-3 strong-600 text-normal mb-0">
                          <span className="heading-count">03</span>
                          Simili-Eventbrite
                        </h3>
                      </div>
                      <div className="col-4 text-right">
                        <Link
                          to="/project/3"
                          className="link link-xs link--line-after strong-600 text-uppercase ls-2"
                        >
                          View case
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <span className="space-xs-only-3 space-sm-only-3" />

          <div className="row cols-xs-space cols-sm-space">
            <div className="col-lg-6 ml-lg-auto order-lg-2 animate-on-scroll fadeInUp">
              <div className="col-wrapper--spaced-x">
                <div className="block block-image-holder">
                  <div className="block-image">
                    <div className="view view-first">
                      <Link to="/project/4">
                        <img
                          src={image4}
                          alt=""
                          height={300}
                          className="object-fit"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="heading heading-3 strong-600 text-normal mb-0">
                          <span className="heading-count">04</span>
                          Ti Sorbet
                        </h3>
                      </div>
                      <div className="col-4 text-right">
                        <Link
                          to="/project/4"
                          className="link link-xs link--line-after strong-600 text-uppercase ls-2"
                        >
                          View case
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 order-lg-1 mt-150 animate-on-scroll fadeInUp">
              <div className="col-wrapper--spaced-x">
                <div className="block block-image-holder mb-5">
                  <div className="block-image">
                    <div className="view view-first">
                      <Link to="project/5">
                        <img
                          src={image5}
                          alt=""
                          width={800}
                          height={300}
                          className="object-fit object-fit-top"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="row align-items-center">
                      <div className="col-8">
                        <h3 className="heading heading-3 strong-600 text-normal mb-0">
                          <span className="heading-count">05</span>
                          WARZ
                        </h3>
                      </div>
                      <div className="col-4 text-right">
                        <Link
                          to="/project/5"
                          className="link link-xs link--line-after strong-600 text-uppercase ls-2"
                        >
                          View case
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProgressiveBar />
      </section>
    </>
  );
};

export default Projects;
