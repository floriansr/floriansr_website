import wave1 from 'assets/images/wave1.png';
import wave2 from 'assets/images/wave2.png';
import wave3 from 'assets/images/wave3.png';

import React from 'react';

const ProgressiveBar = () => {
  return (
    <>
      <div className="line line-1">
        <div
          className="wave wave1"
          style={{ backgroundImage: `url(${wave1})` }}
        />
      </div>
      <div className="line line-2">
        <div
          className="wave wave2"
          style={{ backgroundImage: `url(${wave2})` }}
        />
      </div>
      <div className="line line-3">
        <div
          className="wave wave3"
          style={{ backgroundImage: `url(${wave3})` }}
        />
      </div>
    </>
  );
};

export default ProgressiveBar;
