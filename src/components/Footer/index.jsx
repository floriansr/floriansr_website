import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer" style={{ height: 'bottom' }}>
        <div className="footer-bottom py-4">
          <div className="container">
            <div className="row cols-xs-space col-sm-space align-items-center">
              <div className="col-lg-3 col-12">
                <div className="text-center text-lg-left">
                  <div className="copyright mt-4">
                    <p>
                      Copyright &copy; 2020{' '}
                      <Link
                        to="https://webpixels.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Florian Sueur</strong>
                      </Link>{' '}
                      - All rights reserved
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="text-center">
                  <p>
                    Copyright &copy; 2020{' '}
                    <Link
                      to="https://webpixels.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Florian Sueur</strong>{' '}
                    </Link>
                    - All rights reserved
                  </p>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="text-center text-lg-right">
                  <ul className="social-media social-media--style-1-v4">
                    <li>
                      <a
                        href="https://www.facebook.com/webpixels/"
                        className="facebook"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="Facebook"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/webpixels.io/"
                        className="instagram"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="Instagram"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://dribbble.com/webpixels"
                        className="dribbble"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="Dribbble"
                      >
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
