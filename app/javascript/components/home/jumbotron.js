import React, { Component } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #d64234;
  min-height: 550px;
  padding: 100px;
  color: #fff;
`
const Header= styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 40px;
  line-height:52px;
`

const Subhead = styled.p`
  font-size: 18px;
  font-weight: 500;
`

const Jumbotron = () => {
  return (
    <Section className="home-section">
      <div className="container">
        <div className="row">
          <div className="col col-sm-12 col-md-5">
            <div className="pt-4 mt-4">
              <Header>React for Rails Devs</Header>
              <Subhead>Become a super rails dev with React front-end</Subhead>
            </div>
          </div>
          <div className="col col-sm-12 col-md-7">
            <div className="pt-4 mt-4">
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                frameBorder="0"
                allowFullScreen>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Jumbotron;
