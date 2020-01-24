import React, { Component } from 'react';

import Thumbnail from './thumbnail';

const Item = (props) => {
  return (
    <div className="row pt-4 pb-4">
      <div className="col-md-10 offset-md1">
        <div>
          <div className="card px-5">
            <div className="row">
              <div className="col-md-4">
                <Thumbnail />
              </div>
              <div className="col-md-8">
                <div className="pt-4 pb-4">
                  <h4>{props.title}</h4>
                  <p>{props.desc}</p>
                  <div className="cta-wrapper">
                    <a className="btn cta-button"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Item;
