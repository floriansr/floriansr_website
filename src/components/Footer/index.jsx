import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import { Container, Div, Text, Col, Row, Anchor } from 'atomize';

import './styles.scss';

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' ? (
        ''
      ) : (
        <footer id="footer" className="footer" style={{ height: 'bottom' }}>
          <Div className="footer-bottom py-4">
            <Container>
              <Div className="cols-xs-space col-sm-space">
                <Row>
                  <Col size="8">
                    <Text textAlign="right">
                      Copyright &copy; 2020{' '}
                      <Anchor
                        href="https://webpixels.io"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <strong>Florian Sueur </strong>
                      </Anchor>
                      - All rights reserved
                    </Text>
                  </Col>
                  <Col size="4" textAlign="right">
                    <Row>
                      <Anchor
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
                      </Anchor>
                      <Anchor
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
                      </Anchor>
                      <Anchor
                        href="https://twitter.com/s_floriansusu"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-toggle="tooltip"
                        data-original-title="Twitter"
                      >
                        <TwitterOutlined
                          style={{ fontSize: '20px', color: 'grey' }}
                        />
                      </Anchor>
                    </Row>
                  </Col>
                </Row>
              </Div>
            </Container>
          </Div>
        </footer>
      )}
    </>
  );
};
export default Footer;
