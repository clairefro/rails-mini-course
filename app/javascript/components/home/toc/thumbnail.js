import React, { Component } from 'react';

const Thumbnail = (props) => {
  return (
    <div className="pb-4 pt-4">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
        frameBorder="0"
        allowFullScreen>
      </iframe>
    </div>
  );
}


export default Thumbnail;
