import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

import './styles.scss';

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        ''
      ) : (
        <footer id="footer" className="footer" style={{ height: 'bottom' }}>
          <div className="footer-bottom py-4">
            <div className="container">
              <div className="row cols-xs-space col-sm-space">
                <div className="col-lg-8">
                  <p style={{ textAlign: 'right' }}>
                    Copyright &copy; 2020{' '}
                    <a
                      href="https://webpixels.io"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Florian Sueur </strong>
                    </a>
                    - All rights reserved
                  </p>
                </div>
                <div className="col-lg-4" style={{ textAlign: 'right' }}>
                  <div className="row">
                    <a
                      href="https://github.com/floriansr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-2"
                      data-toggle="tooltip"
                      data-original-title="Github"
                    >
                      <GithubOutlined
                        style={{ fontSize: '20px', color: 'grey' }}
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/florian-sueur/?locale=fr_FR"
                      target="_blank"
                      className="mr-2"
                      rel="noopener noreferrer"
                      data-toggle="tooltip"
                      data-original-title="Linkedin"
                    >
                      <LinkedinOutlined
                        style={{ fontSize: '20px', color: 'grey' }}
                      />
                    </a>
                    <a
                      href="https://twitter.com/s_floriansusu"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-toggle="tooltip"
                      data-original-title="Twitter"
                    >
                      <TwitterOutlined
                        style={{ fontSize: '20px', color: 'grey' }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};
export default Footer;
